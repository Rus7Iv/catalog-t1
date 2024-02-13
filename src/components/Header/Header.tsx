import { HeaderProps } from './types/interfaces'
import { NAV_LINKS } from './types/navLinks'
import './Header.styles.css'

const Header = ({ navLinks = NAV_LINKS }: HeaderProps) => (
  <div className='header'>
    <div className="header-container">
      <div className='header-logo'>
        Goods4you
      </div>
      <div className='header-menu'>
        {navLinks.map(({ href, text, icon: Icon }) => (
          <a href={href} className="header-link" key={text}>
            {text}
            {Icon && <Icon />}
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default Header
