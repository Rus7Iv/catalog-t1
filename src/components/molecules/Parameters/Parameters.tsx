import Button from '../../atoms/Button/Button'
import './Parameters.styles.css'
import { useGetCategoriesQuery } from '../../../api/api'
import { SerializedError } from '@reduxjs/toolkit'

const Parameters = () => {
  const { data: categories, error } = useGetCategoriesQuery(null)

  if (error) {
    return <div>Произошла ошибка: {(error as SerializedError).message}</div>
  }

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
          {categories && categories.map((category: string) => (
            <div key={category} className='parameters__category'>{category}</div>
          ))}
        </div>
      </div>

      <Button children={"Apply"} typeBtn={'filled'} className="parameters__button" />
      <Button children={"Reset"} typeBtn={'flat'} className="parameters__button" />
    </div>
  )
}

export default Parameters
