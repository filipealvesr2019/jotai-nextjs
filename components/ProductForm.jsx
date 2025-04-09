import { useState } from "react";

const ProductForm = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`/api/products`, {
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify({name, price: Number(price)})
        }),
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required/>
            <input type="number" value={price} onChange={((e) => setPrice(e.target.value))} placeholder="Preço" required/>
            <button type="submit">Adicionar Produto</button>
        </form>
    )
}

export default ProductForm;