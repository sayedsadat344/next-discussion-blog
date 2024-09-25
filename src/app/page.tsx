
import CreateTopicForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="m-2 text-xl text-white">Top Posts</h1>
      </div>
      <div className="px-2 py-3 border border-gray-500 shadow-sm">
        <CreateTopicForm />
        <Divider className="my-2" />
        <h3 className="my-2 text-lg text-white">Topics</h3>
        <TopicList />
      </div>
    </div>
  );

 


}
