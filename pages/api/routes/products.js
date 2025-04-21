
import dbConnect from "../lib/mongodb";
import Product from "../models/product";

export default async function handler(req, res){
    await dbConnect();

    if(req.method === "GET"){
        const products = await Product.find({});
        return res.status(200).json(products)
    }

    if(req.method === "POST"){
        const { name, price} = req.body;
        const newProduct = new Product({name, price});
        await newProduct.save();
        return res.status(201).json(newProduct);
    }

    if(req.method === "DELETE"){
        const { id } = req.body;
        await Product.findByIdAndDelete(id);
        return res.status(200).json({ message: "Prduto removido"})
    }

}