import PaginationPost from "../../components/PaginationPost";
import PostsList from "../../components/PostsList";
import { allPosts, Post } from "contentlayer/generated";
import { getPagination } from "@/utils/PaginationUtil";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

export const metadata = {
  title: "Posts | Blog",
  description: "Blog de temas de interés general",
};

const Posts = () => {
  const { currentPosts, totalPages } = getPagination(posts);

  return (
    <div>
      <div className="grid gap-4">
        <PostsList posts={currentPosts} />
        {totalPages > 1 && <PaginationPost totalPages={totalPages} />}
      </div>
    </div>
  );
};

export default Posts;
