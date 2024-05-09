"use server";

import { getAllPosts } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";

export const SearchedPosts = async ({ query }) => {
  const posts = await getAllPosts();
  // console.log("Searched posts ===>", posts);

  const filteredPosts = Array.isArray(posts)
    ? posts.filter((post) => {
        return post.text.toLowerCase().includes(query.toLowerCase());
      })
    : null;

  return (
    <div>
      {filteredPosts.length === 0 ? (
        <h3>No posts</h3>
      ) : (
        <>
          <h3>Найдено: {filteredPosts.length}</h3>
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`${process.env.NEXT_PUBLIC_URL}/blog/${post.id}`}
            >
              <div className="flex my-4 p-4 gap-4 rounded-md border-[1px] border-zinc-600 w-full">
                <div>
                  <Image
                    src={post.image || ""}
                    alt={post.image}
                    height={100}
                    width={120}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-md font-semibold">{post.title}</span>
                  <span className="text-md font-light">
                    {post.createdAt
                      .slice(0, 10)
                      .replace(/-/g, ".")
                      .split(".")
                      .reverse()
                      .join(".")}
                  </span>
                  <span className="text-sm font-light">{post.description}</span>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};
