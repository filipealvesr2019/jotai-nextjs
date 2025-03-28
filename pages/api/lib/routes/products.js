import product from "../models/product";
import dbConnect from "../mongodb";

export default async function handler(req, res){
    await dbConnect();

    if(req.method === "GET"){
        const products = await product.find({});
        return res.status(200).json(products)
    }

    if(req.method === "POST"){
        const { name, price} = req.body;
        const newProduct = new product({name, price});
        await newProduct.save();
        return res.status(201).json(newProduct);
    }

}