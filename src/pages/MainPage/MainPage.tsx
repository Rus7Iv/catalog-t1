import AboutUs from "../../components/AboutUs/AboutUs"
import Catalog from "../../components/Catalog/Catalog"
import Hero from "../../components/Hero/Hero"
import './MainPage.styles.css'

const MainPage = () => {
  return (
    <div className="main-page">
      <Hero />
      <Catalog />
      <AboutUs />
    </div>
  )
}

export default MainPage
