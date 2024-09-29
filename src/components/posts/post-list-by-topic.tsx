import { db } from "@/db";
import * as actions from '@/app/actions';
import Link from "next/link";
import paths from "@/helpers/paths";
import { CardBody, Card, CardHeader, Divider, CardFooter } from "@nextui-org/react";
import ShowPost from '../../app/topics/[slug]/posts/[postId]/page';
import { User } from '../../../../nextjs-dashboard/app/lib/definitions';


export default async function PostListByTopic({ slug }: TopicSlugParam) {
    const posts = await actions.getAllPostsByTopic(slug);

    const renderedPosts = posts.map((post) => {

        return (

            <Card key={post.id} isPressable className="p-3">
                <CardHeader>
                    {post.title}
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Link href={paths.postShowPath(slug,post.id)}>
                        <p className="text-black">
                        {post.content}
                        </p>
                    </Link>
                </CardBody>
                <CardFooter className="text-gray-800">
                <span>By</span>
                <p className="text-default-500">{post.userId}</p>
                </CardFooter>
            </Card>
        )

    
    });

    return (
        <div className="grid flex-wrap grid-cols-2 gap-2">
            {
                posts.length > 0 ? renderedPosts : (
                    <div className="col-span-2 p-4 text-center bg-gray-100 border border-gray-300 rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-700">No Posts Available</h2>
                        <p className="text-gray-500">It seems there are no posts for this topic yet.</p>
                       
                    </div>
                )
            }
        </div>
    );
}


