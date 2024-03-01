import { Dispatch } from 'redux';

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    fetch('https://dummyjson.com')
      .then(response => response.json())
      .then(data => dispatch({ type: 'FETCH_PRODUCTS', payload: data }))
      .catch(error => console.error('Ошибка:', error));
  };
};
