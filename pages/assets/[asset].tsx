import { getAllAsset, getAssetById } from "@/api/queries/getAsset";
import { PUBLICLLINK_HOST, REVALIDATE_INTERVAL } from "@/constants/build";
import { Asset } from "@/interfaces/asset";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Menu from "@/components/Menu/Menu";
import HeroArea from "@/components/Header/HeroArea";
import Footer from "@/components/Footer/Footer";
import { Navi } from "@/interfaces/navi";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";

interface Props {
  assetInfo: Asset;
}

export const getStaticPaths = async () => {
  const assets = await getAllAsset();
  const paths = assets.map((asset) => ({
    params: { asset: asset.id },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: { params: { asset: any } }) => {
  const id = context.params.asset;
  const assetInfo = await getAssetById(id);
  return {
    props: {
      assetInfo,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Asset: NextPage<Props> = (props) => {
  const asset = props.assetInfo;
  const publicLinkImage = asset.publicLink.results[0]?.relativeUrl;
  const pageTitle = "Asset: " + asset.fileName;

  const breadcrumbmenu: Navi[] = [
    { name: "Assets", href: "/assets", current: false },
    { name: asset.title, href: "#", current: true },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle={pageTitle}
          pageDescription={"Digital Asset detail: " + asset.title}
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <p className="text-2xl">Title : {asset.title}</p>
        <p>Filename: {asset.fileName}</p>
        <p>id: {asset.id}</p>
        {publicLinkImage ? (
          <Image
            src={PUBLICLLINK_HOST + "/api/public/content/" + publicLinkImage}
            alt={asset.title}
            height="600"
            width="400"
          />
        ) : (
          <p>No Publiclink</p>
        )}
        <Footer />
      </main>
    </>
  );
};

export default Asset;
