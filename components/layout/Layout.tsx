import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.scss";
import { motion } from "framer-motion";
import { ILayout } from "../../types/types";

function Layout({ children }: ILayout) {
  return (
    <div>
      <Head>
        <title>Bookmark Landing Page - Houssine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
