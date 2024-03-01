import Button from '../../atoms/Button/Button'
import './Hero.styles.css'

const Hero = () => (
  <div className='hero'>
    <h1 className='hero__background'>
      Goods4you
    </h1>
    <div className='hero__description'>
      <h2 className='hero__title'>
        Any products from famous brands with worldwide delivery
      </h2>
      <span className='hero__text'>
        We sell smartphones, laptops, clothes, shoes and many other products at low prices
      </span>
      <Button children={"Go to shopping"} typeBtn={'filled'} isActive />
    </div>
  </div>
)

export default Hero
