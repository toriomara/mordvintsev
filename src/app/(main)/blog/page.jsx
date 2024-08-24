import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { AddPost } from "@/components/AddPost";
import { PostList } from "@/components/PostList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";

export const metadata = {
  title: "Блог",
  description: "Блог адвоката Романа Фёдоровича Мордвинцева",
};

export default function BlogPage() {
  return (
    <div className="wrapper-main flex gap-6 w-full">
      <div className="w-full">
        <h1 className="title-section">Блог</h1>
        <div className="space-x-6 mb-6">
          <AddPost />
          <Button>
            <Link href="/addpost">Добавить пост</Link>
          </Button>
        </div>
        <Suspense fallback={<Loader />}>
          <PostList />
        </Suspense>
      </div>
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
    </div>
  );
}
