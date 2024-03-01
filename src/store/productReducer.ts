type Product = {
    id: number;
    image: string;
    category: string;
    name: string;
    price: number;
  };
  
  type ProductsState = {
    products: Product[];
  };
  
  const initialState: ProductsState = {
    products: [],
  };
  
  type FetchProductsAction = {
    type: 'FETCH_PRODUCTS';
    payload: Product[];
  };
  
  type ProductsAction = FetchProductsAction;
  
  export default function productsReducer(
    state = initialState,
    action: ProductsAction
  ): ProductsState {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return { ...state, products: action.payload };
      default:
        return state;
    }
  }
  