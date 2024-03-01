import { combineReducers } from 'redux';
import productsReducer from './productReducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
