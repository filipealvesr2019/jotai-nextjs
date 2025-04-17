"use client"

import {useAtom} from "jotai"
import { cartCountAtom } from "../../store/store"
import Link from "next/link";

const CartIcon = () => {
    const [cartCount] = useAtom(cartCountAtom);

    return (
        <Link href="/carrinho">
        <div>
        🛒
        </div>
        </Link>
    )
}

export default CartIcon;