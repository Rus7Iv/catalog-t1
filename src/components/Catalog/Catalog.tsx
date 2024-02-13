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
      {products.map(product => (
        <div key={product.id} className='product'>
          <img src={'/' + product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
