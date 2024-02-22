import AboutUs from "../../components/AboutUs/AboutUs"
import Catalog from "../../components/Catalog/Catalog"
import Hero from "../../components/Hero/Hero"
import OurTeam from "../../components/OurTeam/OurTeam"
import Question from "../../components/Question/Question"
import './MainPage.styles.css'

const MainPage = () => {
  return (
    <div className="main-page">
      <Hero />
      <Catalog />
      <AboutUs />
      <Question />
      <OurTeam />
    </div>
  )
}

export default MainPage
