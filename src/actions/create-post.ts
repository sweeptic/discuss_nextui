'use server';

import { auth } from '@/auth';
import { db } from '@/db';
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
export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  // TODO: revalidate the topic show page

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

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this.'],
      },
    };
  }

  //   try {
  const topic = await db.topic.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!topic) {
    return {
      errors: {
        _form: ['Cannot find topic'],
      },
    };
  }
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

  return {
    errors: {},
  };
}
