'use server'

import { auth } from '@/auth';
import { db } from '@/db';
import { z } from 'zod';
import type { Post, Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import paths from '@/helpers/paths';
import { revalidatePath } from 'next/cache';
import { title } from 'process';
import * as actions from '@/app/actions';




const createPostSchema = z.object({


    title: z.string().min(3),
    content: z.string().min(10)


});


interface CreatePostFormState {
    errors: {
        title?: string[];
        content?: string[];
        _form?: string[];
    }
}

// export async function createPost(formData:FormData){
//     const formValues = Object.fromEntries(formData);

//     console.log('The data: ',formValues);

// }

export async function createPost(
    slug: string,
    state: CreatePostFormState,
    payload: FormData

): Promise<CreatePostFormState> {

    const formValues = Object.fromEntries(payload);

    const validatedData = createPostSchema.safeParse({
        title: formValues.title,
        content: formValues.content
    });


    if (!validatedData.success) {

        return {
            errors: validatedData.error?.flatten().fieldErrors
        };

    }


    if (!slug) {
        return {
            errors: {
                _form: ["The slug is NULL"]
            }
        }
    }

  

    const session = await auth();
    if (!session?.user) {
        return {
            errors: {
                _form: ["Your must be loggedIn"]
            }
        };
    }



    const topic: Topic = await actions.getTopicBySlug(slug)

    if(!topic){
        return {
            errors: {
                _form: ["Topic Does not exist"]
            }
        };
    }




    let post: Post;
    try {

        post = await db.post.create({
            data: {
                title: validatedData.data.title,
                content: validatedData.data.content,
                userId: session.user?.id,
                topicId: topic.id
            }
        });

    } catch (err: unknown) {

        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['something went wrong']
                }
            }
        }

    }



    revalidatePath(`/topics/${topic.slug}`);
    redirect(`/topics/${topic.slug}`);




}



export async function getAllPosts() {

    return db.post.findMany();
}


export async function getAllPostsByTopic(slug: string) {

    const topic = await actions.getTopicBySlug(slug);
    return db.post.findMany({
        where: {
            topicId: topic.id
        }
    });
}