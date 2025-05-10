'use client';

import { Button } from '@heroui/button';
import { Input, Textarea } from '@heroui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';
import * as actions from '@/actions';
import { useActionState, useEffect, useState } from 'react';

export default function TopicCreateForm() {
  const [formState, action] = useActionState(actions.createTopic, { errors: {} });

  const [formErrorState, SetFormErrorState] = useState(formState);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log('formState change');
    SetFormErrorState(formState);
  }, [formState]);

  console.log('formErrorState', formErrorState);

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80 ">
            <h3 className="text-lg">Create Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formErrorState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
              onChange={(ev) => setName(ev.target.value)}
              value={name}
            />
            {/* <div className="bg-red-400">{formState.errors.name?.join(', ')}</div> */}
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formErrorState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
              onChange={(ev) => setDescription(ev.target.value)}
              value={description}
            />
            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form?.join(', ')}</div>
            ) : null}

            <Button type="submit" onClick={() => SetFormErrorState({ errors: {} })}>
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
