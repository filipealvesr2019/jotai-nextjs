'use client';
import styles from "./page.module.css";
import { useProducts } from "../../hooks/useProducts";
import ProductList from "../../components/ProductList";
import ProductForm from "../../components/ProductForm";
import Header from "../../components/Header/Header";
import ComponenteSeparado1 from "../../components/componenteSeparado/componenteSeparado1";
import ComponenteSeparado2 from "../../components/componenteSeparado/componenteSeparado2";

export default function Home() {
  useProducts()
  return (
    <div className={styles.page}>
      <Header />
      {/* <ProductForm /> */}
      <ProductList />

      <ComponenteSeparado1 />
      <ComponenteSeparado2 />
    </div>
  );
}
