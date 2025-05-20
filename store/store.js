import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Lista de produtos (não relacionados ao carrinho)
export const productsAtom = atom([]);

// Carrinho sincronizado automaticamente com o localStorage
export const cartAtom = atomWithStorage("cart", []);

// Contador de itens no carrinho
export const cartCountAtom = atom((get) => get(cartAtom).length);
