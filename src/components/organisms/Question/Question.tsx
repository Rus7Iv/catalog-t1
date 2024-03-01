import { useEffect, useState } from 'react'
import Button from '../../atoms/Button/Button'
import './Question.styles.css'

const Question = () => {
    const [categories, setCategories] = useState<{ name: string, img?: string }[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

  useEffect(() => {
    fetch('http://localhost:4000/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPageNum = Math.ceil(categories.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };


  return(
  <div className='question'>
    <div className='question__container'>
      <h1 className='question__title'>
        We will select the perfect product for you
      </h1>
      <span className='question__description'>
       Answer three questions and we will send you a catalog with the most suitable products for you.
      </span>
      <div className='question__categories-container'>
        <h3 className='question__categories-title'>
          What type of product are you considering?
        </h3>
        <div className='question__categories-list'>
          {currentItems.map((category, index) => (
            <div key={index} className='category-item'>
              <div className='category-item__img-container'>
                <img src={category.img ? category.img : "/non_image.png"} alt={category.name} className='category-item__img' />
              </div>
              <div className='category-item__radiobutton'>
                <input type="checkbox" id={`category-${index}`} name={category.name} value={category.name} className='category-item__checkbox'/>
                <span className='checkbox-label'>{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='pagination'>
        {currentPage} of {totalPageNum}
        {currentPage > 1 && <Button children={'Previous'} typeBtn='outlined' className='pagination__btn' onClick={handleClickPrev} />}
        {categories.length > indexOfLastItem && <Button children={'Next step'} typeBtn='outlined' className='pagination__btn' onClick={handleClickNext} />}
      </div>
    </div>
  </div>
)
}

export default Question
