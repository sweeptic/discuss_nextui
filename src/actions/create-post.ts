'use server';

import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}
export async function createPost(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {
  // TODO: revalidate the topic show page

  //   export async function createTopic(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {
  //   console.log('stop...');
  //   await new Promise((resolve, rejected) => setTimeout(resolve, 2000));
  //   console.log('go...');
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };
  //   const session = await auth();
  //   if (!session || !session.user) {
  //     return {
  //       errors: {
  //         _form: ['You must be signed in to do this.'],
  //       },
  //     };
  //   }
  //   let topic: Topic;
  //   try {
  //     topic = await db.topic.create({
  //       data: {
  //         slug: result.data.name,
  //         description: result.data.description,
  //       },
  //     });
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       return {
  //         errors: {
  //           _form: [err.message],
  //         },
  //       };
  //     } else {
  //       return {
  //         errors: {
  //           _form: ['Something went wrong'],
  //         },
  //       };
  //     }
  //   }
  //   revalidatePath('/');
  //   redirect(paths.topicShow(topic.slug));
}
