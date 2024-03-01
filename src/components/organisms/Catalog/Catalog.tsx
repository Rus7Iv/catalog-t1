import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { fetchProducts } from '../../../store/actions';
import './Catalog.styles.css'
import Button from '../../atoms/Button/Button';
import Parameters from '../../molecules/Parameters/Parameters';
import { RootState } from '../../../store/reducer';

type Product = {
  id: number;
  image: string;
  category: string;
  name: string;
  price: number;
};

const Catalog = () => {
  const dispatch: AppDispatch = useDispatch();
  const products: Product[] = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='catalog'>
      <h1 className='catalog__title'>Catalog</h1>
      <div className='catalog__content'>
        <Parameters />
        <div className='catalog__list'>  
          {products.map((product: Product) => (
            product.name && product.price ? (
              <div key={product.id} className='catalog__card'>
                <div className='catalog__card-img'>
                  <img src={product.image ? '/' + product.image : 'public/non_image.png'} alt={product.name} />
                </div>
                <h2 className='catalog__card-name'>{product.name}</h2>
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
