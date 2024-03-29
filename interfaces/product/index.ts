import { Asset, publicLink } from "@/interfaces/asset";

export interface Product {
  id: string;
  productName: string;
  productNumber: string;
  productLabel: {
    "en-US": string | null;
    "ja-JP": string | null;
  };
  productShortDescription: {
    "en-US": string | null;
    "ja-JP": string | null;
  };
  productLongDescription: {
    "en-US": string | null;
    "ja-JP": string | null;
  };
  masterAsset: {
    results: Partial<Asset>[];
  };
  asset: {
    results: Asset[];
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

export const productQuery =
  `id
productName
productLabel
productNumber
productShortDescription
productLongDescription
masterAsset : pCMProductToMasterAsset{
  results{
    id
    title
    fileName
    fileSize
    ` +
  publicLink +
  `
  }
}
asset : pCMProductToAsset
{
  results
  {
    id
    title
    fileName
    fileSize
    ` +
  publicLink +
  `
  }
}`;

// select first 20 products
export const allProductQuery =
  `
{
  products : allM_PCM_Product(first:30) {
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
