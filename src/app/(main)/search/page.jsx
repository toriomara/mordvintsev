"use server";
import Search from "@/components/Search";
import { SearchedPosts } from "@/components/SearchedPosts";

const SearchPage = ({ searchParams }) => {
  const query = searchParams?.query || "kdfjhgnvdklxjg";
  console.log("query ===>", query);

  return (
    <div className="wrapper-main gap-10 grid">
      <h2 className="flex justify-center text-xl">Поиск</h2>
      <Search />
      <SearchedPosts query={query} />
      {/* <SearchBlock3/> */}
    </div>
  );
};

export default SearchPage;
