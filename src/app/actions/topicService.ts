'use server'

import { auth } from '@/auth';
import { db } from '@/db';
import {z} from 'zod';
import type {Topic} from '@prisma/client';
import { redirect } from 'next/navigation';
import paths from '@/helpers/paths';
import { revalidatePath } from 'next/cache';

const createTopicSchema = z.object({


    name:z.string().min(3).regex(/[a-z-]/,{message:"Must be letters or dashes without space"}),
    description:z.string().min(10)


});


interface CreateTopicFormState{
    errors:{
        name?:string[];
        description?:string[];
        _form?:string[];
    }
}

export async function createTopic(formState:CreateTopicFormState,formdata:FormData):Promise<CreateTopicFormState> {

    const formValues = Object.fromEntries(formdata);

    const validatedData = createTopicSchema.safeParse({
        name:formValues.name,
        description:formValues.description
    });


    if(!validatedData.success){

        return {
            errors: validatedData.error?.flatten().fieldErrors
        };

    }


    const session = await auth();
    if(!session?.user){
        return {
            errors:{
                _form:["Your must be loggedIn"]
            }
        };
    }

    

    let topic:Topic;
    try{ 

       topic =  await db.topic.create({
            data:{
                slug:validatedData.data.name,
            description:validatedData.data.description
            }
        });

    }catch(err:unknown){

        if(err instanceof Error){
            return {
                errors:{
                    _form:[err.message]
                }
            }
        }else{
            return {
                errors:{
                    _form:['something went wrong']
                }
            }
        }
        
    }


    revalidatePath('/');
    redirect(paths.showTopicPath(topic.slug));

 


}



export async function getAllTopics() {
    
    return db.topic.findMany();
}


export async function getTopicBySlug(slug: string):Promise<Topic> {

    const topic = await db.topic.findFirst({
        where: {
            slug: slug
        }
    });
   
    if (!topic) {
        throw new Error(`Topic with slug '${slug}' not found`);
    }


    return topic;
}