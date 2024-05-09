import { getAllPosts } from "@/libs/data";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export async function Tost() {
  const { toast } = useToast();
  const posts = await getAllPosts();
  const [tost, setTost] = useState({});

  const TostTitle = () => {};

  useEffect(() => {
    if (posts.length++) {
      setTost({
        title: "Пост ++",
      });
    } else if (posts.length--)
      setTost({
        variant: "destructive",
        title: "Post --",
      });
  }, [posts.length]);

  return <div>{tost}</div>;
}
