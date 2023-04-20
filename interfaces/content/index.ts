import { Asset, publicLink } from "@/interfaces/asset";

export interface Content {
  id: string;
  publicationDate: string;
  locale: {
    valueName: string;
  };
  assets: {
    results: Partial<Asset>[];
  };
  brief: string;
}

export interface ContentTitle extends Content {
  title: string;
}

export interface Blog extends Content {
  blog_Title: string;
  blog_Quote: string;
  blog_Body: string;
}

export interface Recipe extends Content {
  recipe_Title: string;
  recipe_Ingredients: string;
  recipe_Cookinginstructions: string;
  recipe_Nutritionalfacts: string;
}

export interface AllBlogResponse {
  data: {
    blog: {
      results: Partial<Blog>[];
    };
  };
}

export interface BlogResponse {
  data: {
    blog: Partial<Blog>;
  };
}

export interface AllRecipeResponse {
  data: {
    recipe: {
      results: Partial<Recipe>[];
    };
  };
}

export interface RecipeResponse {
  data: {
    recipe: Partial<Recipe>;
  };
}

export const m_content =
  `
id
publicationDate: content_PublicationDate
locale: localizationToContent {
  valueName
}
brief: content_Brief
assets: cmpContentToBriefAsset{
  results
  {
    id
    title
    fileName
    ` +
  publicLink +
  `
  }
}
`;

export const allBlogQuery =
  `
  {
    blog: allM_Content_Blog (orderBy: CONTENT_PUBLICATIONDATE_DESC) {
      results {
        content_Name
        blog_Title
        blog_Quote
        blog_Body` +
  m_content +
  `
      }
    }
  }`;

export const allRecipeQuery =
  `
  {
    recipe: allM_Content_Recipe (orderBy: CONTENT_PUBLICATIONDATE_DESC){
      results {
        recipe_Title
        recipe_Ingredients
        recipe_Cookinginstructions
        recipe_Nutritionalfacts
  ` +
  m_content +
  `
      }
    }
  }`;

export const getBlogByIdQuery = (id: string) => {
  return (
    `
  {
    blog: m_Content_Blog(id: "${id}") {
      blog_Title
      blog_Quote
      blog_Body
      ` +
    m_content +
    `
    }
  }
  `
  );
};

export const getRecipeByIdQuery = (id: string) => {
  return (
    `
  {
    recipe: m_Content_Recipe(id: "${id}") {
      recipe_Title
      recipe_Ingredients
      recipe_Cookinginstructions
      recipe_Nutritionalfacts
      ` +
    m_content +
    `
    }
  }
  `
  );
};
