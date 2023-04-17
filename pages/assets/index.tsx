import { getAllAsset } from "@/api/queries/getAsset";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Asset } from "@/interfaces/asset";
import Link from "next/link";
import { useMemo } from "react";
import { NextPage } from "next";
import AssetList from "@/components/Assets/AssetList";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Head from "next/head";

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
      <Head>
        <title>Digital Asset Management</title>
      </Head>
      <Menu />
      <HeroArea
        pageTitle="Sitecore Digital Asset Management"
        pageDescription="Test"
      />
      <div>
        <h1 className="text-3xl">Asset List</h1>
        {getAssets.map((asset) => (
          <>
            <AssetList asset={asset} />
            <hr />
          </>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Assets;
