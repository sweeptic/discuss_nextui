import TopicCreateForm from '@/components/topics/topic-create-form';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 bg-gray-100">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>

      <div className=" bg-gray-100">
        <TopicCreateForm />
      </div>
    </div>
  );
}
