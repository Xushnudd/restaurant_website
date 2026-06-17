import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import MenuPage from "./pages/menu/MenuPage"
import Gallery from "./pages/Gallery/Gallery"

const paths = [
  "/",
  "/menu",
  "/gallery"
]

const element = [
  <Home />,
  <MenuPage />,
  <Gallery />
]

function App() {
  return (
    <div>
      <Routes>
        {paths.map((el: string, i: number)=> (
          <Route path={el} element={element[i]} />
        ))}
      </Routes>
    </div>
  )
}

export default App
