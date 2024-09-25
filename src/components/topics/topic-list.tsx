import { db } from "@/db";
import * as actions from '@/app/actions';
import Link from "next/link";
import paths from "@/helpers/paths";
import { Chip } from "@nextui-org/react";

export default async function TopicList() {


    const topics = await actions.getAllTopics();

    const renderedTopics = topics.map((topic) => {
        return <div key={topic.id}>
            <Link href={paths.showTopicPath(topic.slug)}>
                <Chip color="warning" variant="bordered">
                         {topic.slug}
                </Chip>
            </Link>
        </div>
    });

    return (
    <div className="flex flex-row flex-wrap gap-2">
      {renderedTopics}
    </div>
  );
}
