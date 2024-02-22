import AboutUs from "../../components/AboutUs/AboutUs"
import Catalog from "../../components/Catalog/Catalog"
import Faq from "../../components/Faq/Faq"
import Hero from "../../components/Hero/Hero"
import OurTeam from "../../components/OurTeam/OurTeam"
import Question from "../../components/Question/Question"
import './MainPage.styles.css'

const MainPage = () => {
  return (
    <div className="main-page">
      <Hero />
      <div id="catalog"><Catalog /></div>
      <div id="aboutus"><AboutUs /></div>
      <div id="productselection"><Question /></div>
      <div id="ourteam"><OurTeam /></div>
      <div id="faq"><Faq /></div>
    </div>
  )
}

export default MainPage
