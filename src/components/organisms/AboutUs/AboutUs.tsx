import { Circle } from '../../../assets/Circle'
import aboutUsImage from '../../../../public/aboutUs_image.jpg'
import './AboutUs.styles.css'

const AboutUs = () => (
  <div className='aboutUs'>
    <div className='aboutUs-container'>
      <div className='aboutUs-description'>
        <h2 className='aboutUs-title'>
          About us
        </h2>
        <span className='aboutUs-text'>
          Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.{'\n'}
          But we will help you make the right choice!
        </span>
        <span className='aboutUs-signature'>— Goods4you</span>
      </div>
      <div className='aboutUs-decoration'>
        <Circle radius={320} className='aboutUs-circle--xl' />
        <Circle radius={150} className='aboutUs-circle--md' />
        <Circle radius={8} filled={true} color='#F14F4F' className='aboutUs-circle--sm' />
      </div>
      <img src={aboutUsImage} alt="About Us" className='aboutUs-image' />
    </div>
  </div>
)

export default AboutUs
