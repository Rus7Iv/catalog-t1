import Navigation from '../Navigation/Navigation'
import { FOOTER_LINKS } from './types/footerLinks'
import './Footer.styles.css'

const Footer = () => (
  <div className='footer'>
    <Navigation navLinks={FOOTER_LINKS} />
  </div>
)

export default Footer
