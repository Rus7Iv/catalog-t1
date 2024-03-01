import AboutUs from '../../organisms/AboutUs/AboutUs'
import Catalog from '../../organisms/Catalog/Catalog'
import Faq from '../../organisms/Faq/Faq'
import Hero from '../../organisms/Hero/Hero'
import OurTeam from '../../organisms/OurTeam/OurTeam'
import Question from '../../organisms/Question/Question'
import './Main.styles.css'

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <div id="catalog"><Catalog /></div>
      <div id="aboutus"><AboutUs /></div>
      <div id="productselection"><Question /></div>
      <div id="ourteam"><OurTeam /></div>
      <div id="faq"><Faq /></div>
    </div>
  )
}

export default Main
