import { useEffect, useState } from 'react'
import './Faq.styles.css'
import { PlusBtn } from '../../assets/PlusBtn';

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
      <div className='faq-container'>
        <h1 className='faq-title'>
          Our team
        </h1>
        <div className='faq-list'>
          {questions.map((item: IQuestion, index: number) => (
            <div key={index} className='faq-card'>
              <div className='faq-questions'>
                <div className={`faq-question--title-container ${item.isOpen ? 'open' : ''}`}>
                  <span className='faq-question--title'>{item.title}</span>
                  <button onClick={() => toggleQuestion(index)} className='faq-question--btn'><PlusBtn /></button>
                </div>
                <div className={`faq-question--text ${item.isOpen ? 'open' : ''}`}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
