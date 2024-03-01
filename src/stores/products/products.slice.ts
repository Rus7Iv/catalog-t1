import {createSlice} from "@reduxjs/toolkit";
import { Product } from "../../components/organisms/Catalog/types/interface";

const initialState: Product[] = []

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            const products = action.payload
            state.push(products)
        }
    }
})

export const {actions, reducer} = productsSlice
