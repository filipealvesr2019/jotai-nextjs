import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error('sem variavel do banco de dados.')
}