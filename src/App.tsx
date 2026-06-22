import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BanquetPage from "./pages/BanquetPage/BanquetPage"
import MenuPage from "./pages/menu/MenuPage"
import Priya from "./components/Priya"

const paths = [
  "/",
  "/banquet",
  "/menu",
  "/priya"
]

const element = [
  <Home />,
  <BanquetPage />,
  <MenuPage />,
  <Priya />
]

function App() {
  return (
    <div>
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
