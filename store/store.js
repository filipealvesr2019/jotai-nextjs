import { atom } from "jotai";

export const productsAtom = atom([]);

const localStorageCartAtom = atom(() => {
    if(typeof window !== "undefined"){
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    }
    return [];
})
export const cartAtom = atom(
    (get) => get(localStorageCartAtom),
    (get, set, update) => {
        const 
    }
)
// export const cartAtom = atom([]); // array de produtos
export const cartCountAtom = atom((get) => get(cartAtom).length) // comtador de produtos no carrinho