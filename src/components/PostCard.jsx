import Link from "next/link";
import Image from "next/image";
import { cn } from "@/libs/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PostCard = ({ className, post, ...props }) => {
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
        "grid grid-rows-[1fr,2fr] sm:grid-rows-[1fr,1fr] md:grid-cols-[1fr,2fr] md:grid-rows-none gap-2",
        className
      )}
      {...props}
    >
      <CardHeader className="relative">
        <Image
          className="object-cover rounded-t-md md:rounded-l-md md:rounded-r-none"
          src={post.image}
          alt={post.title}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="grid gap-4 grid-cols-1 p-4">
        <CardTitle className="text-2xl leading-normal scroll-m-20 md:text-2xl">
          {post.title}
        </CardTitle>
        <CardDescription className="">
          {`${post.description.substring(0, 200)}...`}
        </CardDescription>
        <CardFooter className="grid sm:grid sm:grid-cols-2 gap-4 p-0">
          <span>{post.author}</span>
          <span className="flex sm:justify-end font-light text-sm">{date}</span>
          <Badge className="justify-start w-fit rounded-sm" variant="outline">
            {post.category}
          </Badge>
          <Button className="w-fit sm:place-self-end">
            <Link href={`/blog/${post.id}`} key={post.id}>
              Подробнее
            </Link>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
