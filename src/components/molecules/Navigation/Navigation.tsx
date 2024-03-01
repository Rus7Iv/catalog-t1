import { NavProps } from './types/interfaces'
import './Navigation.styles.css'

const Navigation = ({ navLinks }: NavProps) => (
  <div className="navigation">
    <div className='navigation__logo'>
      Goods4you
    </div>
    <div className='navigation__menu'>
      {navLinks && navLinks.map(({ href, text, icon: Icon }) => (
        <a href={href} className="navigation__link" key={text}>
          {text}
          {Icon && <Icon />}
        </a>
      ))}
    </div>
  </div>
)

export default Navigation
