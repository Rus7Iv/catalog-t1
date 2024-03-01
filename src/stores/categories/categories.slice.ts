import {createSlice} from "@reduxjs/toolkit"

const initialState: string[] = []

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories: (state, action) => {
            const categories = action.payload
            state.push(categories)
        }
    }
})

export const {actions, reducer} = categoriesSlice
