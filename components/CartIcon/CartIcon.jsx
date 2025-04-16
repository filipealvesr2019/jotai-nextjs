"use client"

import useAtom from "jotai"
import { cartCountAtom } from "../../store/store"

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