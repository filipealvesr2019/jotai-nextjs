import {useEffect} from 'react';
import { useAtom } from 'jotai';
import { productsAtom} from '../store/store'
export const useProducts = () => {
    const [, setProducts] = useAtom(productsAtom);

    useEffect(() => {

    }, [])
}