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
  const slugs = [
    ["post-1", "post2"], // 例として3つのslugを指定
    ["post-2", "post2"],
    ["post-3", "post2"],
  ];

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
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* その他の表示内容 */}
    </div>
  );
};

export default BlogPostPage;
