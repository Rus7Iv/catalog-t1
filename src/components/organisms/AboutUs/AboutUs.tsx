import { Circle } from '../../../assets/Circle'
import aboutUsImage from '../../../../public/aboutUs_image.jpg'
import './AboutUs.styles.css'

const AboutUs = () => (
  <div className='about-us'>
    <div className='about-us__container'>
      <div className='about-us__description'>
        <h2 className='about-us__title'>
          About us
        </h2>
        <span className='about-us__text'>
          Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.{'\n'}
          But we will help you make the right choice!
        </span>
        <span className='about-us__signature'>— Goods4you</span>
      </div>
      <div className='about-us__decoration'>
        <Circle radius={320} className='about-us__circle about-us__circle--xl' />
        <Circle radius={150} className='about-us__circle about-us__circle--md' />
        <Circle radius={8} filled={true} color='#F14F4F' className='about-us__circle about-us__circle--sm' />
      </div>
      <img src={aboutUsImage} alt="About Us" className='about-us__image' />
    </div>
  </div>
)

export default AboutUs
