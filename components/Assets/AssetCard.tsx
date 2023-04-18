import { PUBLICLLINK_HOST } from "@/constants/build";
import { Asset } from "@/interfaces/asset";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  asset: Asset;
}

const AssetCard: React.FC<Props> = ({ asset }) => {
  const publicLinkImage = asset.publicLink.results[0]?.relativeUrl;
  return (
    <>
      <li key={asset.id} className="relative">
        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          {publicLinkImage ? (
            <Image
              src={PUBLICLLINK_HOST + "/api/public/content/" + publicLinkImage}
              alt={asset.title}
              height="600"
              width="400"
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
          ) : (
            <p>No Publiclink Image</p>
          )}
          <Link href={"/assets/" + asset.id}>
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {asset.fileName}</span>
            </button>
          </Link>
        </div>
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-gray-200">
          {asset.fileName}
        </p>
        <p className="pointer-events-none block text-sm font-medium text-gray-500">
          {asset.fileSize} MB
        </p>
      </li>
    </>
  );
};

export default AssetCard;
