import { atom } from "jotai";

export const productsAtom = atom([]);

const localStorageCartAtom = atom(() => {
    if(typeof window !== "undefined"){
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    }
    return [];
})

const _cartAtom = atom((get) => get(localStorageCartAtom),
         (get, set, newCart) => {
            set(localStorageCartAtom, newCart)
         }
);


export const cartAtom = atom(
    (get) => get(_cartAtom),
    (get, set, update) => {
        const newCart = typeof update === "function" ? update(get(_cartAtom)) : update;
        set(_cartAtom, newCart);
        if(typeof window !== "undefined"){
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    }
)
// export const cartAtom = atom([]); // array de produtos
export const cartCountAtom = atom((get) => get(cartAtom).length) // comtador de produtos no carrinho