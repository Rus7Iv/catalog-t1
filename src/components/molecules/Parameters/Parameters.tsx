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
      <h1 className='parameters-title'>
        Selection by parameters
      </h1>
      
      <div className='categories'>
      <h2 className='categories-title'>
        Category
      </h2>
      <div className='categories-container'>
        {categories.map((category, index) => (
          <div key={index} className='category'>{category.name}</div>
        ))}
      </div>
      </div>

      <Button children={"Apply"} typeBtn={'filled'} className="button-full-width" />
      <Button children={"Apply"} typeBtn={'flat'} className="button-full-width" />
    </div>
  )
}

export default Parameters
