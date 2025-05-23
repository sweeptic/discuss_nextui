import Link from 'next/link';
import PostShow from '@/components/posts/post-show';
import paths from '@/paths';
import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import { Suspense } from 'react';
import PostShowLoading from '@/components/posts/post-show-loading';

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  const comments = fetchCommentsByPostId;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>

      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>

      <CommentCreateForm postId={postId} startOpen />
      {/* <CommentList fetchData={() => fetchCommentsByPostId(postId)} /> */}
      <CommentList postId={postId} />
    </div>
  );
}
