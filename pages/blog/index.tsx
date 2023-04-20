import { getAllBlog } from "@/api/queries/getBlog";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Blog } from "@/interfaces/content";
import { Navi } from "@/interfaces/navi";
import { NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";

interface Props {
  posts: Blog[];
}

export const getStaticProps = async () => {
  const posts = await getAllBlog();

  return {
    props: {
      posts,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Blog: NextPage<Props> = ({ posts }) => {
  const getPosts = useMemo(() => (!posts ? [] : posts), [posts]);
  const breadcrumbmenu: Navi[] = [
    { name: "Content", href: "/content", current: false },
    { name: "Blog", href: "/blog", current: true },
  ];

  return (
    <>
      <Head>
        <title>Sitecore Content Hub - Blog Home</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Blog Home"
          pageDescription="Blog using Content Marketing Platform"
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <ul>
          {getPosts.map((item) => (
            <li key={item.id}>{item.blog_Title}</li>
          ))}
        </ul>
        <Footer />
      </main>
    </>
  );
};

export default Blog;
