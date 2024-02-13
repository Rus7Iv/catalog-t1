import Navigation from '../Navigation/Navigation'
import { HEADER_LINKS } from './types/headerLinks'
import './Header.styles.css'

const Header = () => (
  <div className='header'>
    <div className='header-container'>
      <Navigation navLinks={HEADER_LINKS} />
    </div>
  </div>
)

export default Header
