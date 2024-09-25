import CreatePostForm from "@/components/posts/create-post-form";
import PostListByTopic from "@/components/posts/post-list-by-topic";
import { Chip, Divider } from "@nextui-org/react";


interface TopicShowParams{
  params:{
    slug:string;
  }
}

export default function TopicShow({params}:TopicShowParams) {

  console.log('The params: ',params.slug);
  
  const slug = params.slug;
  return (
    <div>
     <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 p-3">
        <h1 className="mb-2 text-xl text-white"> Posts for {slug}</h1>

        <PostListByTopic slug={slug}/>

      </div>
      <div className="px-2 py-3 border border-gray-500 shadow-sm">
        <CreatePostForm slug={slug} />
        <Divider className="my-2" />
        
        

        <Chip color="primary" variant="bordered" className="p-2 my-2">
        <h3 className="text-lg text-white">{slug}</h3>
        </Chip>

        <div className="flex flex-row flex-wrap">
           <span className="text-white">
            The topic goes as needed,The topic goes as needed,The topic goes as needed,
            </span> 
        </div>
      </div>
    </div>
    </div>
  );
}
