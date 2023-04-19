import { getAllRecipe } from "@/api/queries/getRecipe";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Recipe } from "@/interfaces/content";
import { NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";

interface Props {
  articles: Recipe[];
}

export const getStaticProps = async () => {
  const articles = await getAllRecipe();

  return {
    props: {
      articles,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Content: NextPage<Props> = ({ articles }) => {
  const getArticles = useMemo(() => (!articles ? [] : articles), [articles]);

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
        <h2>Recipe</h2>
        {getArticles.map((article) => (
          <tr key={article.id}>
            {article.recipe_Title}: {article.publicationDate}
          </tr>
        ))}
        <Footer />
      </main>
    </>
  );
};

export default Content;
