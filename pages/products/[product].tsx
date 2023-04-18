import { getAllProduct, getProductById } from "@/api/queries/getProduct";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import Menu from "@/components/Menu/Menu";
import ProductDetail from "@/components/Products/ProductDetail";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Navi } from "@/interfaces/navi";
import { Product } from "@/interfaces/product";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface Props {
  productInfo: Product;
}

export const getStaticPaths = async () => {
  const products = await getAllProduct();
  const paths = products.map((product) => ({
    params: { product: product.id },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: { params: { product: any } }) => {
  const id = context.params.product;
  const productInfo = await getProductById(id);
  return {
    props: {
      productInfo,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Product: NextPage<Props> = (props) => {
  const product = props.productInfo;
  const pageTitle = "PCM: " + product.productName;

  const breadcrumbmenu: Navi[] = [
    { name: "Products", href: "/products", current: false },
    { name: product.productName, href: "#", current: true },
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
          pageDescription={"Detail of Product Content: " + product.productName}
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <ProductDetail product={product} />
        <Footer />
      </main>
    </>
  );
};

export default Product;
