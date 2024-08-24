"use server";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "@/components/ui/loader";
import { getPostById } from "@/libs/data";
import { DeletePost } from "@/components/DeletePost";
import { EditPost } from "@/components/EditPost";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

export default async function Post({ params }) {
  const post = await getPostById(params.id);
  const text = post.text.split("<>");

  return (
    <div className="wrapper-main flex gap-6">
      <div className="w-full">
        <Suspense fallback={<Loader />}>
          <article>
            <h1 className="py-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {post.title}
            </h1>
            <div className="relative h-64 w-full">
              <Image
                className="w-full h-full top-0 left-0 object-cover rounded-md"
                src={post.image}
                alt={post.title}
                fill
                objectFit="cover"
              />
            </div>
            <div className="leading-7 [&:not(:first-child)]:mt-6">
              <div>
                {text.map((item) => (
                  <div key={item}>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 py-4">
              <DeletePost id={post.id} />
              <EditPost post={post} params={params} />
              <Link href={{ pathname: `/editpost/${post.id}`, query: post }}>
                <Button>Редактировать на странице</Button>
              </Link>
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
