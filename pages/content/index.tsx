import { getAllProduct } from "@/api/queries/getProduct";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Product } from "@/interfaces/product";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";

interface Props {
  products: Product[];
}

export const getStaticProps = async () => {
  const products = await getAllProduct();

  return {
    props: {
      products,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Content: NextPage<Props> = ({ products }) => {
  const getProducts = useMemo(() => (!products ? [] : products), [products]);

  return (
    <>
      <Head>
        <title>Sitecore Content Hub - Content Management Platform</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Sitecore Content Marketing Platform"
          pageDescription="Maximize the business value of stronger content by expanding the speed, scale, and quality of content production."
        />
        Now constructions
        <Footer />
      </main>
    </>
  );
};

export default Content;
