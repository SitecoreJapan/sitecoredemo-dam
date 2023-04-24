import { getAllRecipe, getRecipeById } from "@/api/queries/getRecipe";
import HeroArea from "@/components/Header/HeroArea";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Recipe } from "@/interfaces/content";
import { Navi } from "@/interfaces/navi";
import { NextPage } from "next";
import Head from "next/head";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import Footer from "@/components/Footer/Footer";

interface Props {
  recipe: Recipe;
}

export const getStaticPaths = async () => {
  const products = await getAllRecipe();
  const paths = products.map((recipe) => ({
    params: { recipe: recipe.id },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: { params: { recipe: any } }) => {
  const id = context.params.recipe;
  const recipeInfo = await getRecipeById(id);
  return {
    props: {
      recipeInfo,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const RecipeDetail: NextPage<Props> = (props) => {
  const recipe = props.recipe;
  const pageTitle = "Test";

  const breadcrumbmenu: Navi[] = [
    { name: "Content", href: "/content", current: false },
    { name: "Recipe", href: "/content/recipe", current: false },
    { name: pageTitle, href: "#", current: true },
  ];
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle={pageTitle}
          pageDescription={"Recipe: " + pageTitle}
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <div>Test</div>
        <Footer />
      </main>
    </>
  );
};

export default RecipeDetail;
