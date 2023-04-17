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
        <title>Content Management Platform</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Sitecore Content Marketing Platform"
          pageDescription="Test"
        />
        {getProducts.map((product) => (
          <div key={product.id}>
            <h2 className="text-2xl font-bold">
              Product Name: {product.productName}
            </h2>
            <p>
              Product ID: <Link href={"/products/" + product.id}>リンク</Link>
            </p>

            <p>Product Number: {product.productNumber}</p>
            <hr />
          </div>
        ))}
        <Footer />
      </main>
    </>
  );
};

export default Content;
