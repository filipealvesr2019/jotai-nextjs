import { useAtom } from "jotai";
import { cartAtom, productsAtom } from "../../store/store";

const ComponenteSeparado2 = () => {
    const [products] = useAtom(productsAtom);
    const [cart, setCart] = useAtom(cartAtom)
   
    const addToCart = (product) => {
      setCart((cart) => [...cart, product]);


    }
    console.log('cart', cart)
    return (
       <div>
      <h1>Produtos em outro componente 2</h1>
      <ul style={{
        display: "flex",
        flexDirection: "column"
      }}>
        {products.map((product, index) => {
            return (
                <li key={index}>
                    {product.name}-R${product.price}
                    <button onClick={() => addToCart(product)}>Adicionar ao Carinho</button>
                </li>
            )
        })}
      </ul>
       </div>
    )
}

export default ComponenteSeparado2;