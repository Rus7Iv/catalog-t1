import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import Header from "./components/organisms/Header/Header"
import Footer from "./components/organisms/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
