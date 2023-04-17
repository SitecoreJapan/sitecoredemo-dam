import { getAllAsset } from "@/api/queries/getAsset";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Asset } from "@/interfaces/asset";
import Link from "next/link";
import { useMemo } from "react";
import { NextPage } from "next";
import AssetList from "@/components/Assets/AssetList";

interface Props {
  assets: Asset[];
}

export const getStaticProps = async () => {
  const assets = await getAllAsset();

  return {
    props: {
      assets,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Assets: NextPage<Props> = ({ assets }) => {
  const getAssets = useMemo(() => (!assets ? [] : assets), [assets]);

  return (
    <main>
      <h1 className="text-3xl">Asset List</h1>
      {getAssets.map((asset) => (
        <>
          <AssetList asset={asset} />
          <hr />
        </>
      ))}
      <Link href="/">Home</Link>
    </main>
  );
};

export default Assets;
