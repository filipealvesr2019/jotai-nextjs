import { useAtom } from "jotai"
import { cartAtom } from "../store/store"

export default function Carrinho(){
    const [cart, setCart] = useAtom(cartAtom);

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
                    
                </ul>
            )}

        </div>
    )
}