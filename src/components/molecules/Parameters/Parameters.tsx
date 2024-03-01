import { useEffect, useState } from 'react';
import Button from '../../atoms/Button/Button';
import './Parameters.styles.css'

const Parameters = () => {
  const [categories, setCategories] = useState<{ name: string }[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className='parameters'>
      <h1 className='parameters__title'>
        Selection by parameters
      </h1>
      
      <div className='parameters__categories'>
      <h2 className='parameters__categories-title'>
        Category
      </h2>
      <div className='parameters__categories-container'>
        {categories.map((category, index) => (
          <div key={index} className='parameters__category'>{category.name}</div>
        ))}
      </div>
      </div>

      <Button children={"Apply"} typeBtn={'filled'} className="parameters__button" />
      <Button children={"Apply"} typeBtn={'flat'} className="parameters__button" />
    </div>
  )
}

export default Parameters
