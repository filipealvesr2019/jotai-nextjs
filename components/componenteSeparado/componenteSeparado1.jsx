import { useAtom } from "jotai";
import { productsAtom } from "../../store/store";

const ComponenteSeparado1 = () => {

    const [products] = useAtom(productsAtom)
   
    return (
       <div>

        <h1>Produtos em outro componente</h1>
        <ul style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {products.map((product) => {
                return (
                    <li>
{product.name} - R${product.price}
                    </li>
                )
            })}
        </ul>
       </div>
    )
}

export default ComponenteSeparado1;