"use client";

import { useAtom } from "jotai";
import styles from "./CartComponent.module.css";
import { cartAtom } from "../../store/store";
const CartComponent = () => {
  const [cart, setCart] = useAtom(cartAtom);

  return (
    <div>
      <h1>Carrrinho de Compras</h1>
      {cart.length === 0 ? <p>O carrinho esta vazio</p> : <ul></ul>}
    </div>
  );
};

export default CartComponent;
