'use client';

import { Input, Popover, PopoverTrigger, Button, PopoverContent } from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from '../button';

export default function PostCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={actions.createPost}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>

            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              //   isInvalid={!!formState.errors.name}
              //   errorMessage={formState.errors.name?.join(', ')}
            />

            <Input
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              //   isInvalid={!!formState.errors.name}
              //   errorMessage={formState.errors.name?.join(', ')}
            />

            {/* {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div>
            ) : null} */}

            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
