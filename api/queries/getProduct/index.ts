import { fetchGraphQL } from "@/api";
import {
  Product,
  AllProductResponse,
  ProductResponse,
  allProductQuery,
  getProductByIdQuery,
} from "@/interfaces/product";

export const getAllProduct = async (): Promise<Partial<Product>[]> => {
  const results: AllProductResponse = (await fetchGraphQL(
    allProductQuery
  )) as AllProductResponse;

  const products: Partial<Product>[] = [];

  results.data.products.results.forEach((product: Partial<Product>) => {
    products.push({
      id: product.id,
      productName: product.productName,
      productNumber: product.productNumber,
      masterAsset: product.masterAsset,
    });
  });

  return products;
};

export const getProductById = async (id: string): Promise<Partial<Product>> => {
  const productResponse: ProductResponse = (await fetchGraphQL(
    getProductByIdQuery(id)
  )) as ProductResponse;

  return productResponse.data.product;
};
