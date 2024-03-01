import { useEffect, useState } from 'react';
import './Catalog.styles.css'
import Button from '../../atoms/Button/Button';
import Parameters from '../../molecules/Parameters/Parameters';

type BaseProduct = {
  id: number;
  image: string;
  category: string;
};

type RequiredFields = {
  name: string;
  price: number;
};

type Product = Partial<BaseProduct> & Required<RequiredFields>;

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/catalog')
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, 9)))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  return (
    <div className='catalog'>
      <h1 className='catalog__title'>Catalog</h1>
      <div className='catalog__content'>
        <Parameters />
        <div className='catalog__list'>  
          {products.map(product => (
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
