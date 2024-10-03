"use server";

import { Suspense } from "react";
import Image from "next/image";
import { Loader } from "@/components/ui/loader";
import { getPostById } from "@/libs/data";
import { Sidebar } from "@/components/Sidebar";
import { EditBlock } from "@/components/EditBlock";
import { SocialIcons } from "@/components/SocialIcons";

export default async function Post({ params }) {
  const post = await getPostById(params.id);
  const text = post.text.split("<>");

  // Remake. Don't folow SOLID(DRY!). Parent component have {date}
  const date = post.createdAt
    .slice(0, 10)
    .replace(/-/g, ".")
    .split(".")
    .reverse()
    .join(".");

  return (
    <div className="wrapper-main flex gap-6">
      <div className="md:w-full">
        <Suspense fallback={<Loader />}>
          <article className="grid sm:grid-cols-[min-content,_1fr] sm:grid-rows-[repeat(6, minmax(0, 1fr))] gap-6">
            <div></div>
            <h1 className="col-span-2 sm:col-span-1 py-3 text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl">
              {post.title}
            </h1>
            <div className="hidden xs:block"></div>
            <div className="grid col-span-2 sm:col-span-1 md:flex md:justify-center items-end md:space-x-6">
              <span className="text-primary">{post.category}</span>
              <span className="text-xl">{post.author}</span>
              <span className="leading-snug font-semibold text-lg text-gray-600 dark:text-gray-400">
                {date}
              </span>
            </div>
            <div className="hidden sm:grid col-span-1 sm:self-start">
              <SocialIcons layout={"grid"} />
            </div>
            <div className="col-span-2 sm:col-span-1 relative w-full h-80">
              <Image
                className="top-0 left-0 object-cover rounded-md"
                src={post.image}
                alt={post.title}
                fill
              />
            </div>
            <div className="col-span-2 flex sm:hidden">
              <SocialIcons layout={"flex"} />
            </div>
            <div></div>
            <div className="col-span-2 sm:col-span-1 leading-7">
              {text.map((item) => (
                <div key={item}>
                  <div dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            <div></div>
            <div className="col-span-2 sm:col-span-1">
              <EditBlock post={post} />
            </div>
          </article>
        </Suspense>
      </div>
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
    </div>
  );
}

// notFound? if post undefined
