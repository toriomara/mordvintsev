import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { AddPost } from "@/components/AddPost";
import { PostList } from "@/components/PostList";

export const metadata = {
  title: "Блог",
  description: "Блог адвоката Романа Фёдоровича Мордвинцева",
};

export default function BlogPage() {
  return (
    <div className="wrapper-main">
      <h1 className="title-section">Блог</h1>
      {/* <CreatePost /> */}
      <AddPost />
      <Suspense fallback={<Loader />}>
        <PostList />
      </Suspense>
    </div>
  );
}
