export interface Asset {
  id: string;
  title: string;
  fileName: string;
  fileSize: number;
  description: {
    "en-US": string | null;
    "ja-JP": string | null;
  };
  publicLink: {
    results: Partial<PublicLink>[];
  };
  fileProperties: {
    properties: {
      width: string;
      height: string;
      content_type: string;
    };
  };
}

export interface AllAssetResponse {
  data: {
    assets: {
      results: Partial<Asset>[];
    };
  };
}

export interface AssetResponse {
  data: {
    asset: Partial<Asset>;
  };
}

export interface PublicLink {
  id: string;
  resource: string;
  relativeUrl: string;
  conversionConfiguration: {
    width: number;
    height: number;
  };
}

export const publicLink = `
publicLink: assetToPublicLink {
  results {
    id
    resource
    relativeUrl
    conversionConfiguration
  }
}`;

export const allAssetQuery =
  `
  {
    assets: allM_Asset(first: 20) {
      total
      results {
        id
        title
        fileName
        fileSize
        ` +
  publicLink +
  `
      }
    }
  }
  `;

export const assetQuery =
  `
  id
  title
  fileName
  fileSize

  ` + publicLink;

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
