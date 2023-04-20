import { getAllBlog } from "@/api/queries/getBlog";
import { getAllRecipe } from "@/api/queries/getRecipe";
import ContentList from "@/components/Content/ContentList";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Blog, ContentTitle, Recipe } from "@/interfaces/content";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";

interface Props {
  posts: Blog[];
  articles: Recipe[];
}

export const getStaticProps = async () => {
  const posts = await getAllBlog();
  const articles = await getAllRecipe();

  return {
    props: {
      posts,
      articles,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Content: NextPage<Props> = ({ posts, articles }) => {
  const getAllPosts = useMemo(() => (!posts ? [] : posts), [posts]);
  const getAllArticles = useMemo(() => (!articles ? [] : articles), [articles]);

  const getPosts: Partial<ContentTitle>[] = [];
  const getArticles: Partial<ContentTitle>[] = [];

  getAllPosts.forEach((post: Partial<Blog>, index) => {
    if (index < 3) {
      getPosts.push({
        id: post.id,
        title: post.blog_Title,
        href: "/blog",
        brief: "post.brief",
        publicationDate: post.publicationDate,
      });
    }
  });

  getAllArticles.forEach((article: Partial<Recipe>, index) => {
    if (index < 3) {
      getPosts.push({
        id: article.id,
        title: article.recipe_Title,
        href: "/content/recipe",
        brief: article.brief,
        publicationDate: article.publicationDate,
      });
    }
  });

  return (
    <>
      <Head>
        <title>Sitecore Content Hub - Content Management Platform</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Content Marketing Platform"
          pageDescription="Maximize the business value of stronger content by expanding the speed, scale, and quality of content production."
        />
        <div className="mt-10 ml-10 mb-10 mr-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl mb-3">Blog</h2>
              <ContentList content={getPosts} />
              <p className="text-right mt-4">
                <Link href="/blog/">More blog posts</Link>
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-3">Recipe</h2>
              <ContentList content={getArticles} />
              <p className="text-right mt-4">
                <Link href="/content/recipe/">More Recipes</Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Content;
