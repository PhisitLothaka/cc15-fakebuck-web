import PostItem from "../features/post/PostItem";

export default function PostList() {
  return (
    <div className="flex flex-col gap-4">
      <PostItem />
      <PostItem />
    </div>
  );
}
