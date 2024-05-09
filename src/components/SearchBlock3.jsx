import { SearchBlock } from "@/components/SearchBlock";
import { SearchedPosts } from "@/components/SearchedPosts";
import { useParams } from "next/navigation";

// Not used temporary

export const SearchBlock3 = ({ searchParams }) => {
  const query = searchParams?.query || "";
  console.log("query ===>", query);
  console.log("searchParams ===>", searchParams);

  return (
    <SearchBlock>
      {/* <SearchedPosts query={query} /> */}
    </SearchBlock>
  );
};
