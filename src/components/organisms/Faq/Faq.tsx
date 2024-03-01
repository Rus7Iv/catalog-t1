import { useEffect, useState } from 'react'
import { PlusBtn } from '../../../assets/PlusBtn';
import './Faq.styles.css'

interface IQuestion {
  title: string;
  value: string;
  isOpen?: boolean;
}

const Faq = () => {
    const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data.map((item: IQuestion) => ({...item, isOpen: false}))));
  }, []);

  const toggleQuestion = (index: number) => {
    setQuestions(questions.map((item, i) => i === index ? {...item, isOpen: !item.isOpen} : item));
  }

  return(
    <div className='faq'>
      <div className='faq__container'>
        <h1 className='faq__title'>
          FAQ
        </h1>
        <div className='faq__list'>
          {questions.map((item: IQuestion, index: number) => (
            <div key={index} className='faq__card'>
              <div className='faq__questions'>
                <div className={`faq__question-title-container ${item.isOpen ? 'faq__question-title-container--open' : ''}`}>
                  <span className='faq__question-title'>{item.title}</span>
                  <button onClick={() => toggleQuestion(index)} className='faq__question-btn'><PlusBtn /></button>
                </div>
                <div className={`faq__question-text ${item.isOpen ? 'faq__question-text--open' : ''}`}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq

