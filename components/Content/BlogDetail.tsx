import { Blog } from "@/interfaces/content";
import Head from "next/head";

interface Props {
  post: Blog;
}

export default function BlogDetail({ post }: Props) {
  const blogTitle = "Blog:" + post.blog_Title;
  return (
    <>
      <Head>
        <title>{blogTitle}</title>
      </Head>
    </>
  );
}
