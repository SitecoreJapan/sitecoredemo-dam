import { fetchGraphQL } from "@/api";
import {
  AllAssetResponse,
  Asset,
  AssetResponse,
  allAssetQuery,
  getAssetByIdQuery,
} from "@/interfaces/asset";

export const getAllAsset = async (): Promise<Partial<Asset>[]> => {
  const results: AllAssetResponse = (await fetchGraphQL(
    allAssetQuery
  )) as AllAssetResponse;

  const assets: Partial<Asset>[] = [];

  results.data.assets.results.forEach((asset: Partial<Asset>) => {
    assets.push({
      id: asset.id,
      title: asset.title,
      fileName: asset.fileName,
      publicLink: asset.publicLink,
      fileSize: asset.fileSize,
    });
  });

  return assets;
};

export const getAssetById = async (id: string): Promise<Partial<Asset>> => {
  const assetResponse: AssetResponse = (await fetchGraphQL(
    getAssetByIdQuery(id)
  )) as AssetResponse;

  return assetResponse.data.asset;
};
