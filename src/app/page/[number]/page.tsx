import PaginationPost from "../../../components/PaginationPost";
import PostsList from "../../../components/PostsList";
import { notFound } from "next/navigation";
import { allPosts, Post } from "contentlayer/generated";
import { getPagination } from "@/utils/PaginationUtil";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

interface Props {
  params: {
    number: string;
  };
}

export const generateStaticParams = () => {
  return Array.from({ length: posts.length }, (_, i) => ({
    number: `${i + 1}`,
  }));
}

const LayoutPage = ({ params }: Props) => {
  let arrayCurrentPosts;
  let totalPagesNumber;

  try {
    const {currentPosts, totalPages} = getPagination(posts, 2, params.number);
    arrayCurrentPosts = currentPosts;
    totalPagesNumber = totalPages;
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <div className="grid gap-4 container mx-auto">
        <PostsList posts={arrayCurrentPosts} />
        {
          totalPagesNumber > 1 && <PaginationPost totalPages={totalPagesNumber} currentPage={parseInt(params.number)} />
        }
      </div>
    </div>
  );
};

export default LayoutPage;
