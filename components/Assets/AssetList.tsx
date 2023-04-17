import { PUBLICLLINK_HOST } from "@/constants/build";
import { Asset } from "@/interfaces/asset";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  asset: Asset;
}

const AssetList: React.FC<Props> = ({ asset }) => {
  const publicLinkImage = asset.publicLink.results[0]?.relativeUrl;
  return (
    <div key={asset.id}>
      <h2>{asset.title}</h2>
      <p>{asset.id}</p>
      {publicLinkImage ? (
        <Link href={"/assets/" + asset.id}>
          <Image
            src={PUBLICLLINK_HOST + "/api/public/content/" + publicLinkImage}
            alt={asset.title}
            height="600"
            width="400"
          />
        </Link>
      ) : (
        <p>No Publiclink</p>
      )}
    </div>
  );
};

export default AssetList;
