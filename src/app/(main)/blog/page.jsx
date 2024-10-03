import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { PostList } from "@/components/PostList";
import { Sidebar } from "@/components/Sidebar";
import { AddPostButton } from "@/components/AddPostButton";

export const metadata = {
  title: "Блог",
  description: "Блог адвоката Романа Фёдоровича Мордвинцева",
};

export default async function BlogPage() {
  return (
    <div className="wrapper-main flex gap-6 w-full">
      <div className="w-full">
        <h1 className="title-section">Блог</h1>
        <AddPostButton />
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
