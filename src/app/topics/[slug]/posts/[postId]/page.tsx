import Link from 'next/link';
import PostShow from '@/components/posts/post-show';
import paths from '@/paths';
import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import { fetchCommentsByPostId } from '@/db/queries/comments';

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
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      {/* <CommentList fetchData={() => fetchCommentsByPostId(postId)} /> */}
      <CommentList postId={postId} />
    </div>
  );
}
