import { NavProps } from './types/interfaces'
import './Navigation.styles.css'

const Navigation = ({ navLinks }: NavProps) => (
  <div className="navigation-container">
    <div className='navigation-logo'>
      Goods4you
    </div>
    <div className='navigation-menu'>
      {navLinks && navLinks.map(({ href, text, icon: Icon }) => (
        <a href={href} className="navigation-link" key={text}>
          {text}
          {Icon && <Icon />}
        </a>
      ))}
    </div>
  </div>
)

export default Navigation
