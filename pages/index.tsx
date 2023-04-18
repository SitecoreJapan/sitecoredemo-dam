import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Menu from "@/components/Menu/Menu";
import Link from "next/link";
import Head from "next/head";
import Feature from "@/components/Feature/Feature";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sitecore Experience Edge for Content Hub Sample</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Experience Edge for Content Hub"
          pageDescription="Headless content delivery at scale"
        />
        <Feature />
        <Footer />
      </main>
    </>
  );
}
