import dbConnect from "../mongodb";

export default async function handler(req, res){
    await dbConnect();

    if(req.method === "GET"){
        const products = await product.find({});
    }

}