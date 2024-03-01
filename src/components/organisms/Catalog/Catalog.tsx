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
      <h1 className='catalog-title'>Catalog</h1>
      <div className='catalog-content'>
        <Parameters />
        <div className='catalog-list'>  
          {products.map(product => (
            product.name && product.price ? (
              <div key={product.id} className='catalog-card'>
                <div className='product-img'>
                  <img src={product.image ? '/' + product.image : 'public/non_image.png'} alt={product.name} />
                </div>
                <h2 className='product-name'>{product.name}</h2>
                <p className='product-price'>{product.price} $</p>
              </div>
            ) : null
          ))}
          <div className='btn-container'>
            <Button children={"Show more"} typeBtn={'filled'} isActive />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
