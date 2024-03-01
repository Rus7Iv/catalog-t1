import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {reducer as productsReducer,} from "./products/products.slice.ts"
import {reducer as categoriesReducer,} from "./categories/categories.slice.ts";
import {api} from "../api/api.ts"

const reducers = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    [api.reducerPath]: api.reducer
})
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})