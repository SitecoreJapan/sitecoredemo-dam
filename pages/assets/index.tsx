import { getAllAsset } from "@/api/queries/getAsset";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Asset } from "@/interfaces/asset";
import { useMemo } from "react";
import { NextPage } from "next";
import AssetCard from "@/components/Assets/AssetCard";
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
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-10 ml-10 mr-10 mb-10 "
      >
        {getAssets.map((asset) => (
          <>
            <AssetCard asset={asset} />
          </>
        ))}
      </ul>
      <Footer />
    </main>
  );
};

export default Assets;
