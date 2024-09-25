'use client'

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@nextui-org/react";
import * as actions from '@/app/actions';
import { useFormState } from "react-dom";
import FormButton from "../shared/form-button";

export default function CreateTopicForm() {

    const [formState,createAction] = useFormState(actions.createTopic,{errors:{}})

  return (
        <Popover placement="bottom-end"  backdrop="opaque" offset={20} showArrow >
            <PopoverTrigger>
                <Button color="secondary" variant="bordered" className="text-white">New Topic</Button>
            </PopoverTrigger>

            <PopoverContent>
                
            <form action={createAction}>
                <div className="flex flex-col justify-center gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Topic</h3>
                        <Input label="Name" labelPlacement="outside" placeholder="Topic name" variant="bordered" name="name" 
                        isInvalid={!! formState.errors.name}
                        errorMessage={formState.errors.name?.join(', ')}
                        />
                        
                        <Textarea label="Description" labelPlacement="outside" placeholder="Topic description" variant="bordered" name="description" 
                        isInvalid={!! formState.errors.description}
                        errorMessage={formState.errors.description?.join(', ')}/>

                      
                        <FormButton> Save </FormButton>

                        
                        {
                           formState.errors._form? <div className="p-2 text-sm text-center text-white bg-red-400"> formState.errors._form?.join(', ') </div> :''
                        }
                       
                       
                </div>
                
            </form>
        </PopoverContent>
        </Popover>
      
  );
}
