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
  recipeInfo: Recipe;
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
  const recipe = props.recipeInfo;
  const pageTitle = "Recipe: " + recipe.recipe_Title;

  const description = recipe?.brief || "no description";

  const metaDescription = description.replace(/<[^>]+>/g, "");

  const breadcrumbmenu: Navi[] = [
    { name: "Content", href: "/content", current: false },
    { name: "Recipe", href: "/content/recipe", current: false },
    { name: recipe.recipe_Title, href: "#", current: true },
  ];
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle={recipe.recipe_Title}
          pageDescription={metaDescription}
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <div className="mt-4 ml-8 mr-8 mb-7">
          <h2 className="text-2xl font-bold">INGREDIENTS</h2>
          <article
            className="prose prose-slate dark:prose-invert"
            dangerouslySetInnerHTML={{
              __html: recipe.recipe_Ingredients || "",
            }}
          ></article>
          <h2 className="text-2xl font-bold">COOKING INSTRUCTIONS</h2>
          <article
            className="prose prose-slate dark:prose-invert"
            dangerouslySetInnerHTML={{
              __html: recipe.recipe_Cookinginstructions || "",
            }}
          ></article>
          <h2 className="text-2xl font-bold">NUTRITIONAL FACTS</h2>
          <article
            className="prose prose-slate dark:prose-invert"
            dangerouslySetInnerHTML={{
              __html: recipe.recipe_Nutritionalfacts || "",
            }}
          ></article>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default RecipeDetail;
