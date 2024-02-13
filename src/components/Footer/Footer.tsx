import Navigation from '../Navigation/Navigation'
import { FOOTER_LINKS } from './types/footerLinks'
import './Footer.styles.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer-container'>
      <Navigation navLinks={FOOTER_LINKS} />
    </div>
  </footer>
)

export default Footer
