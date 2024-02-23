import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/utils/fetchData";
import { AddPost } from "@/components/AddPost";
import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";

import { cn } from "@/libs/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Блог | Адвокат Р.Ф. Мордвинцев",
  description: "Блог адвоката Романа Фёдоровича Мордвинцева",
};

export default async function BlogPage({ className }) {
  const posts = await getAllPosts();

  console.log("posts =>", posts);

  return (
    <div className="wrapper-main">
      <h1 className="title-section">Блог</h1>
      <AddPost />
      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols lg:grid-rows-3 xl:grid-rows-4 gap-4 md:gap-y-8 md:gap-x-6 lg:flex-rows-3">
          {posts.length === 0 ? (
            <h2 className="text-center text-3xl">Постов нет</h2>
          ) : (
            posts.map((post) => (
              <PostCard key={post.id} className={className} post={post} />
            ))
          )}
        </div>
      </Suspense>
    </div>
  );
}

const PostCard = ({ className, post, ...props }) => {
  const date = post.createdAt
    .slice(0, 10)
    .replace(/-/g, ".")
    .split(".")
    .reverse()
    .join(".");

  return (
    <Card
      key={post.id}
      className={cn(
        "grid grid-rows-[1fr,1fr] md:grid-cols-[1fr,2fr] md:grid-rows-none gap-2",
        className
      )}
      {...props}
    >
      <CardHeader className="relative">
        <Image
          className="object-cover rounded-t-md md:rounded-l-md md:rounded-r-none"
          src={post.image}
          alt={post.title}
          fill
        />
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <CardTitle className="text-md scroll-m-20 md:text-2xl font-semibold tracking-tight">
          {post.title}
        </CardTitle>
        <CardDescription className="leading-7">
          {post.description}
        </CardDescription>
        <CardFooter className="grid sm:grid sm:grid-cols-2 gap-4 p-0">
          <span>{post.author}</span>
          <Badge className="sm:place-self-end bg-orange-700 hover:none text-white w-fit">
            {post.category}
          </Badge>
          <span>{date}</span>
          <Link
            className="sm:place-self-end"
            href={`/blog/${post.id}`}
            key={post.id}
          >
            <Button className="w-fit">Подробнее</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
