import {useEffect} from 'react';
import { useAtom } from 'jotai';
import { productsAtom} from '../store/store'
export const useProducts = () => {
    const [, setProducts] = useAtom(productsAtom);

    useEffect(() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));

    }, [setProducts]);
}