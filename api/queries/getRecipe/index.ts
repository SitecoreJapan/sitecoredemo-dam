import { fetchGraphQL } from "@/api";
import {
  Recipe,
  AllRecipeResponse,
  RecipeResponse,
  allRecipeQuery,
  getRecipeByIdQuery,
} from "@/interfaces/content";

export const getAllRecipe = async (): Promise<Partial<Recipe>[]> => {
  const results: AllRecipeResponse = (await fetchGraphQL(
    allRecipeQuery
  )) as AllRecipeResponse;

  const articles: Partial<Recipe>[] = [];

  results.data.recipe.results.forEach((article: Partial<Recipe>) => {
    articles.push({
      id: article.id,
      recipe_Title: article.recipe_Title,
      recipe_Ingredients: article.recipe_Ingredients,
      recipe_Cookinginstructions: article.recipe_Cookinginstructions,
      recipe_Nutritionalfacts: article.recipe_Nutritionalfacts,
      publicationDate: article.publicationDate,
      locale: article.locale,
    });
  });

  return articles;
};

export const getRecipeById = async (id: string): Promise<Partial<Recipe>> => {
  const productResponse: RecipeResponse = (await fetchGraphQL(
    getRecipeByIdQuery(id)
  )) as RecipeResponse;

  return productResponse.data.recipe;
};
