import { atom } from "jotai";

export const productsAtom = atom([]);
export const cartAtom = atom([]); // array de produtos
export const cartCountAtom = atom((get) => get(cartAtom).length) // comtador de produtos no carrinho