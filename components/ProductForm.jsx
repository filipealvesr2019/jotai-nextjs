import { useState } from "react";

const ProductForm = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`/api/products`, {
            method: "POST",
            headers: {"Content-Type": ""}
        })
    }

}

export default ProductForm;