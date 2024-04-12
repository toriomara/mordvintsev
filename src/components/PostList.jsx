import { getAllPosts } from "@/lib/data";
import { PostCard } from "./PostCard";

export async function PostList({ className }) {
  const posts = await getAllPosts();

  console.log("posts =>", posts, posts.length);

  return (
    <div className="grid grid-cols lg:grid-rows-3 xl:grid-rows-4 gap-4 md:gap-y-8 md:gap-x-6 lg:flex-rows-3">
      {posts.length === 0 ? (
        <h2 className="text-center text-3xl">Постов нет</h2>
      ) : (
        posts
          .reverse()
          .map((post) => (
            <PostCard key={post.id} className={className} post={post} />
          ))
      )}
    </div>
  );
}
