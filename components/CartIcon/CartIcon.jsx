"use client"

import {useAtom} from "jotai"
import { cartAtom } from "../../store/store"
import Link from "next/link";
import styles from './CartIcon.module.css'
const CartIcon = () => {
    const [cartCount] = useAtom(cartAtom);

    return (
        <Link href="/carrinho">
        <div style={{
            position: 'relative'
        }}>
        🛒
        <span>
            {cartCount || 0}
        </span>
        </div>
        </Link>
    )
}

export default CartIcon;