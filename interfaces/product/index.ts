import { Asset } from "@/interfaces/asset";

export interface Product {
  id: string;
  productName: string;
  productNumber: string;
  masterAsset: {
    results: Partial<Asset>[];
  };
  asset: {
    results: Partial<Asset>[];
  };
}

export interface AllProductResponse {
  data: {
    products: {
      results: Partial<Product>[];
    };
  };
}

export interface ProductResponse {
  data: {
    product: Partial<Product>;
  };
}

export const productQuery = `id
productName
productLabel
productNumber
productShortDescription
productLongDescription
masterAsset : pCMProductToMasterAsset{
  results{
    id
    title
    publicLink: assetToPublicLink{
      results
      {
        relativeUrl
      }
    }
  }
}
asset : pCMProductToAsset
{
  results
  {
    id
    title 
    assetToPublicLink{
      results{
        relativeUrl
      }
    }
  }
}`;

// select first 20 products
export const allProductQuery =
  `
{
  products : allM_PCM_Product(first:20) {
    results { ` +
  productQuery +
  `
    }
  }
}
`;

export const getProductByIdQuery = (id: string) => {
  return (
    `
    {
      product: m_PCM_Product(id: "${id}") {` +
    productQuery +
    `  }
  }
  `
  );
};
