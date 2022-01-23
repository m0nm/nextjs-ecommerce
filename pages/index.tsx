import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Broaduct - Shopping Website</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* display products */}
      <Products />
    </>
  );
};

export default Home;

// fetch store api
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
