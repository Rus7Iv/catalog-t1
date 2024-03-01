import { FOOTER_LINKS } from './types/footerLinks'
import Navigation from '../../molecules/Navigation/Navigation'
import './Footer.styles.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__container'>
      <Navigation navLinks={FOOTER_LINKS} />
    </div>
  </footer>
)

export default Footer
