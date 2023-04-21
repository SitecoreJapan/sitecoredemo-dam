import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import { Navi } from "@/interfaces/navi";
import Menu from "@/components/Menu/Menu";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
}

interface BlogProps {
  post: BlogPost;
}

// getStaticPaths関数で動的なパスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  // ブログの記事のslugを指定して、動的なパスを生成する
  const slugs = [];

  slugs.push(["post-1", "post2"]);
  slugs.push(["post-2", "post2"]);
  slugs.push(["post-3", "post2"]);

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// getStaticProps関数でslugを受け取り、ブログの記事を取得する
export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const slug = params?.slug as string[]; // slugを取得

  // 最後の要素を使ってブログの記事を取得するなどの処理を行う
  const lastSlug = slug[slug.length - 1];
  // ここでは、ダミーの記事データを作成して返す例を示します
  const post: BlogPost = {
    slug: lastSlug,
    title: `Post ${lastSlug}`,
    content: `Content of Post ${lastSlug}`,
  };

  return {
    props: {
      post,
    },
  };
};

// ページコンポーネント
const BlogPostPage = ({ post }: BlogProps) => {
  const router = useRouter();

  const breadcrumbmenu: Navi[] = [
    { name: "Content", href: "/content", current: false },
    { name: "blog", href: "/blog", current: false },
    { name: "dummy", href: "/blog/dummy", current: true },
  ];

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Menu />
      <HeroArea
        pageTitle="Blog Home"
        pageDescription="Blog using Content Marketing Platform"
      />
      <Breadcrumbs navi={breadcrumbmenu} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {/* その他の表示内容 */}
      </div>
      <Footer />
    </main>
  );
};

export default BlogPostPage;
