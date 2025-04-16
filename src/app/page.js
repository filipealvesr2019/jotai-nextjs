'use client';
import styles from "./page.module.css";
import { useProducts } from "../../hooks/useProducts";
import ProductList from "../../components/ProductList";
import ProductForm from "../../components/ProductForm";

export default function Home() {
  useProducts()
  return (
    <div className={styles.page}>
      <ProductForm />
      <ProductList />
    </div>
  );
}
