"use client"

import {useAtom} from "jotai"
import { cartAtom } from "../../store/store"
import Link from "next/link";

const CartIcon = () => {
    const [cartCount] = useAtom(cartAtom);

    return (
        <Link href="/carrinho">
        <div>
        🛒
        </div>
        </Link>
    )
}

export default CartIcon;