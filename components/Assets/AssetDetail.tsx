import Image from "next/image";
import Link from "next/link";
import { Asset } from "@/interfaces/asset";
import { PUBLICLLINK_HOST } from "@/constants/build";

interface Props {
  asset: Asset;
}

export default function AssetDetail({ asset }: Props) {
  const publicLinkImage = asset.publicLink.results[0]?.relativeUrl;
  const assetImage =
    PUBLICLLINK_HOST + "/api/public/content/" + publicLinkImage;

  const publicLinkImageList = asset.publicLink.results;

  const descriptionen = asset.description["en-US"]
    ? asset.description["en-US"]
    : "No description available.";
  const descriptionja = asset.description["ja-JP"]
    ? asset.description["ja-JP"]
    : "No description available.";

  return (
    <div className="bg-gray-900 py-12 sm:py-12">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            {publicLinkImage ? (
              <Image
                src={assetImage}
                alt={asset.title}
                height="600"
                width="400"
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
            ) : (
              <p className="text-gray-300">No Publiclink Image</p>
            )}
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {asset.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Description: {descriptionen}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Description(Ja): {descriptionja}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Filesize: Width {asset.fileProperties.properties.width}, height{" "}
                {asset.fileProperties.properties.height}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                List of Public Link
              </p>
              <ul className="text-gray-400 list-disc">
                {publicLinkImageList.map((publicLink) => (
                  <li key={publicLink.id}>
                    <Link
                      href={
                        PUBLICLLINK_HOST +
                        "/api/public/content/" +
                        publicLink.relativeUrl
                      }
                    >
                      {publicLink.relativeUrl}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
