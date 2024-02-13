import { useEffect, useState } from 'react';
import './Catalog.styles.css'

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/catalog')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  return (
    <div className='catalog'>
      <h1 className='catalog-title'>Catalog</h1>
      <div className='catalog-list'>  
        {products.map(product => (
          <div key={product.id} className='catalog-card'>
            <img src={'/' + product.image} alt={product.name} />
            <h2 className='product-name'>{product.name}</h2>
            <p className='product-price'>{product.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
