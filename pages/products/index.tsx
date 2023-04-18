import { getAllProduct } from "@/api/queries/getProduct";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Navi } from "@/interfaces/navi";
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

const Products: NextPage<Props> = ({ products }) => {
  const getProducts = useMemo(() => (!products ? [] : products), [products]);
  const breadcrumbmenu: Navi[] = [
    { name: "Products", href: "/products", current: true },
  ];

  return (
    <>
      <Head>
        <title>Sitecore Content Hub - Product Content Management</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Product Content Management"
          pageDescription="Centralize and automate the management and maintenance of product data"
        />
        <Breadcrumbs navi={breadcrumbmenu} />
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

export default Products;
