import Navigation from '../Navigation/Navigation'
import { FOOTER_LINKS } from './types/footerLinks'
import './Footer.styles.css'

const Footer = () => (
  <footer>
    <Navigation navLinks={FOOTER_LINKS} />
  </footer>
)

export default Footer
