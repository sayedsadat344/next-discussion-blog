'use client'

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@nextui-org/react";
import * as actions from '@/app/actions';
import { useFormState } from "react-dom";
import FormButton from "../shared/form-button";



export default function CreatePostForm({slug}:TopicSlugParam) {

    // const topic =   actions.getTopicBySlug(slug);



    const [formState, createAction] = useFormState(actions.createPost.bind(null,slug),{ errors: {} } );

  return (
        <Popover placement="bottom-end"  backdrop="opaque" offset={20} showArrow >
            <PopoverTrigger>
                <Button color="secondary" variant="bordered" className="text-white">New Post</Button>
            </PopoverTrigger>

            <PopoverContent>
                
            <form action={createAction}>
                <div className="flex flex-col justify-center gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Post</h3>
                        <Input label="Title" labelPlacement="outside" placeholder="Post Title" variant="bordered" name="title" 
                        isInvalid={!! formState?.errors?.title}
                        errorMessage={formState?.errors?.title?.join(', ')}
                        />
                        
                        <Textarea label="Description" labelPlacement="outside" placeholder="Topic description" variant="bordered" name="content" 
                        isInvalid={!! formState?.errors?.content}
                        errorMessage={formState?.errors?.content?.join(', ')}
                        />

                      
                        <FormButton> Save </FormButton>

                        
                        {
                           formState.errors._form && 
                           <div className="p-2 text-sm text-center text-white bg-red-400">{formState.errors._form.join(', ')}</div>
                        }
                       
                       
                </div>
                
            </form>
        </PopoverContent>
        </Popover>
      
  );
}
