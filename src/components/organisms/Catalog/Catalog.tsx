import './Catalog.styles.css'
import Button from '../../atoms/Button/Button';
import Parameters from '../../molecules/Parameters/Parameters';
import { useGetProductsQuery } from '../../../api/api';
import { SerializedError } from '@reduxjs/toolkit';
import { Product } from './types/interface';

const Catalog = () => {
  const { data, error } = useGetProductsQuery(null);
  const products = data?.products;

  if (error) {
    return <div>Произошла ошибка: {(error as SerializedError).message}</div>;
  }

  return (
    <div className='catalog'>
      <h1 className='catalog__title'>Catalog</h1>
      <div className='catalog__content'>
        <Parameters />
        <div className='catalog__list'>  
          {products?.map((product: Product) => (
            product.title && product.price ? (
              <div key={product.id} className='catalog__card'>
                <div className='catalog__card-img'>
                  <img src={product.image ? '/' + product.image : 'public/non_image.png'} alt={product.title} />
                </div>
                <h2 className='catalog__card-name'>{product.title}</h2>
                <p className='catalog__card-price'>{product.price} $</p>
              </div>
            ) : null
          ))}
          <div className='catalog__button-container'>
            <Button children={"Show more"} typeBtn={'filled'} isActive />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
