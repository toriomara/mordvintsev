import { Suspense } from "react";
import Image from "next/image";
import { Loader } from "@/components/ui/loader";
import { getPostById } from "@/libs/data";
import { DeletePost } from "@/components/DeletePost";
import { EditPost } from "@/components/EditPost";
// import { UpdatePost } from "@/components/UpdatePost";

export default async function Post({ params }) {
  const post = await getPostById(params.id);

  // console.log("postId ===>", post.id);

  return (
    <div className="wrapper-main">
      <Suspense fallback={<Loader />}>
        <article>
          <h1 className="py-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {post.title}
          </h1>
          <div className="relative h-64 w-full">
            <Image className="" src={post.image} alt={post.title} fill />
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">{post.text}</p>
          <div className="flex gap-4 py-4">
            <DeletePost id={post.id} />
            <EditPost post={post} params={params} />
            {/* <UpdatePost post={post} /> */}
          </div>
        </article>
      </Suspense>
    </div>
  );
}

// notFound? if post undefined
