export interface Content {
  id: string;
  content_PublicationDate: string;
  Locale: {
    valueName: string;
  };
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

export const m_content = `
id
content_PublicationDate
Locale: localizationToContent {
  valueName
}
`;

export const allBlogQuery =
  `
  {
    blog: allM_Content_Blog {
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
    recipe: allM_Content_Recipe {
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
