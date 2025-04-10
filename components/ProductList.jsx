const { useAtom } = require("jotai")
const { productsAtom } = require("../store/store")

const ProductList = () => {
    const [products, setProducts] = useAtom(productsAtom);

    

    return (
        <div>
        {products.map((product) => (
            <span>
                {product.name} - R$ {product.price}
            </span>
        ))}
        </div>
    )
}

export default ProductList;