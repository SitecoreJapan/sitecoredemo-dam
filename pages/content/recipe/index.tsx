import { getAllRecipe } from "@/api/queries/getRecipe";
import RecipeCard from "@/components/Content/RecipeCard";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Recipe } from "@/interfaces/content";
import { Navi } from "@/interfaces/navi";
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

const Recipe: NextPage<Props> = ({ articles }) => {
  const getArticles = useMemo(() => (!articles ? [] : articles), [articles]);
  const breadcrumbmenu: Navi[] = [
    { name: "Content", href: "/content", current: false },
    { name: "Recipe", href: "/content/recipe", current: true },
  ];

  return (
    <>
      <Head>
        <title>Sitecore Content Hub - Recipe Home</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Recipe Home"
          pageDescription="Recipe using Content Marketing Platform"
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <div className="mt-8 mb-8 ml-8 mr-8">
          <h2 className="text-2xl mb-8">New posts</h2>
          <ul>
            {getArticles.map((item) => (
              <article
                key={item.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <RecipeCard recipe={item} />
              </article>
            ))}
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Recipe;
