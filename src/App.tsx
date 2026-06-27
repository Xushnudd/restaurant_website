import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MenuPage from "./pages/menu/MenuPage"
import BanquetPage from "./pages/BanquetPage/BanquetPage"
import Gallery from "./pages/Gallery/Gallery"
import CateringPage from "./pages/Catering/CateringPage"
import Contact from "./pages/Contact-us/Contact-us"

const paths = [
  "/",
  "/menu",
  "/banquet",
  "/gallery",
  "/catering",
  "/contact-us"
]

const element = [
  <Home />,
  <MenuPage />,
  <BanquetPage />,
  <Gallery />,
  <CateringPage />,
  <Contact />
]

function App() {
  return (
    <div className="min-w-300">
      <Header />
      <Routes>
        {paths.map((el: string, i: number)=> (
          <Route path={el} element={element[i]} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
