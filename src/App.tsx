import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MenuPage from "./pages/menu/MenuPage"
import BanquetPage from "./pages/BanquetPage/BanquetPage"

const paths = [
  "/",
  "/menu",
  "/banquet"
]

const element = [
  <Home />,
  <MenuPage />,
  <BanquetPage />,
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
