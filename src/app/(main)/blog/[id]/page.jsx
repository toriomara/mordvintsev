import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Loader } from "@/components/ui/loader";
import { getPostById } from "@/utils/fetchData";
import { DeletePost } from "@/components/DeletePost";
import { EditPost } from "@/components/EditPost";
export const dynamic = "force-dynamic";
import { Breadcrumb } from "@/components/Breadcrumb";

export default async function Post({ params }) {
  const post = await getPostById(params.id);
  const postId = post.id;
  console.log("postId =>", postId);

  try {
    return (
      <div className="wrapper-main">
        <Suspense fallback={<Loader />}>
          {/* <Breadcrumb capitalizeLinks /> */}
          <article className="">
            <h1 className="py-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {post.title}
            </h1>
            <div className="relative h-64 w-full">
              <Image className="" src={post.image} alt={post.title} fill />
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">{post.text}</p>
            <div className=""></div>
            <div className="flex gap-4 py-4">
              <DeletePost id={postId} />
              <EditPost id={postId} />
            </div>
          </article>
        </Suspense>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
