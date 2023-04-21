import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import { Navi } from "@/interfaces/navi";
import Menu from "@/components/Menu/Menu";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Blog } from "@/interfaces/content";
import { getAllBlog, getBlogBySlug } from "@/api/queries/getBlog";

interface Props {
  post: Partial<Blog>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllBlog();
  const slugs: [string, string, string, string][] = [];

  allPosts.forEach((item) => {
    const publication = item.publicationDate
      ? item.publicationDate.slice(0, 10) || ""
      : "";
    const publicationYear = publication.slice(0, 4);
    const publicationMonth = publication.slice(5, 7);
    const publicationDay = publication.slice(8, 10);

    const slug = item.contentName ? item.contentName || "" : "";

    slugs.push([publicationYear, publicationMonth, publicationDay, slug]);
  });

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// getStaticProps関数でslugを受け取り、ブログの記事を取得する
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string[]; // slugを取得

  // 最後の要素を使ってブログの記事を取得するなどの処理を行う
  const lastSlug = slug[slug.length - 1];

  const getPost = await getBlogBySlug(lastSlug);

  return {
    props: {
      post: getPost,
    },
  };
};

// ページコンポーネント
const BlogPostPage = ({ post }: Props) => {
  const router = useRouter();

  const pageTitle = post?.blog_Title || "Default Title";

  const breadcrumbmenu: Navi[] = [
    { name: "Content", href: "/content", current: false },
    { name: "blog", href: "/blog", current: false },
    { name: pageTitle, href: "#", current: true },
  ];

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Menu />
      <HeroArea
        pageTitle={pageTitle}
        pageDescription="Blog using Content Marketing Platform"
      />
      <Breadcrumbs navi={breadcrumbmenu} />
      <div>
        <h1>{pageTitle}</h1>
        <p>{post.publicationDate}</p>
        <p>{post.blog_Quote}</p>
        <p>{post.blog_Body}</p>
        <p>
          Asset {post.assets?.results[0].publicLink?.results[0].relativeUrl}
        </p>
        <p>brief {post.brief}</p>
      </div>
      <Footer />
    </main>
  );
};

export default BlogPostPage;
