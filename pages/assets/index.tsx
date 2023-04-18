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
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import { Navi } from "@/interfaces/navi";

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

  const breadcrumbmenu: Navi[] = [
    { name: "Assets", href: "/assets", current: true },
  ];

  return (
    <main>
      <Head>
        <title>Sitecore Content Hub - Digital Asset Management</title>
      </Head>
      <Menu />
      <HeroArea
        pageTitle="Digital Asset Management"
        pageDescription="Centralize all your digital assets and deliver them to any customer touchpoint"
      />
      <Breadcrumbs navi={breadcrumbmenu} />
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
