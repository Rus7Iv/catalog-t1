import Button from '../Button/Button'
import './Hero.styles.css'

const Hero = () => (
  <div className='hero'>
    <h1 className='hero-background'>
      Goods4you
    </h1>
    <div className='hero-description'>
      <h2 className='hero-title'>
        Any products from famous brands with worldwide delivery
      </h2>
      <span className='hero-text'>
        We sell smartphones, laptops, clothes, shoes and many other products at low prices
      </span>
      <Button children={"Go to shopping"} typeBtn={'filled'} isActive />
    </div>
  </div>
)

export default Hero
