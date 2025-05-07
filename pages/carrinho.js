import { useAtom } from "jotai"
import { cartAtom } from "../store/store"

export default function Carrinho(){
    const [cart, setCart] = useAtom(cartAtom);

    const removeItem = (index) => {
        setCart((items) => items.filter((_, i) => i !== index));
    }
    return (
        <div>

        </div>
    )
}