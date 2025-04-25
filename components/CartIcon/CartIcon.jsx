"use client"

import {useAtom} from "jotai"
import { cartAtom, cartCountAtom } from "../../store/store"
import Link from "next/link";
import styles from './CartIcon.module.css'
const CartIcon = () => {
    const [cartCount] = useAtom(cartCountAtom);

    return (
        <Link href="/carrinho">
        <div style={{
            position: 'relative'
        }}>
        🛒
        <span className={styles.CartCount}>
            {cartCount || 0}
        </span>
        </div>
        </Link>
    )
}

export default CartIcon;