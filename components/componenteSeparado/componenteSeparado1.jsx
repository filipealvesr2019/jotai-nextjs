import { useAtom } from "jotai";
import { cartAtom, productsAtom } from "../../store/store";

const ComponenteSeparado1 = () => {
  const [products] = useAtom(productsAtom);
  const [, setCart] = useAtom(cartAtom)

  const addToCart = (product) => {
    setCart((cart) => [...cart, product])
  }
  return (
    <div>
      <h1>Produtos em outro componente 1</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {products.map((product, index) => {
          return (
            <li key={index}>
              {product.name} - R${product.price}
              <button onClick={() => addToCart(product)}>Adicionar ao Carinho</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ComponenteSeparado1;
