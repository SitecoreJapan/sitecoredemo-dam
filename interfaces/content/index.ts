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
    allM_Content_Blog {
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
    allM_Content_Blog {
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

export const getAssetByIdQuery = (id: string) => {
  return (
    `{
      asset: m_Asset(id: "${id}") {
        id
        title
        fileName
        fileSize
        description
        fileProperties
        ` +
    publicLink +
    `
      }
    }
    `
  );
};
