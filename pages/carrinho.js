'use client'
import { useAtom } from "jotai"
import { cartAtom } from "../store/store"
import { useEffect, useState } from "react";

export default function Carrinho(){
    const [cart, setCart] = useAtom(cartAtom);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if(!hasMounted) return null;
    const removeItem = (index) => {
        setCart((items) => items.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h1>Seu Carrinho</h1>
            {cart.length === 0 ? (
                <p>O carrinho esta vazio</p>
            ): (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - R$ {item.price}
                            <button onClick={() => removeItem(index)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}