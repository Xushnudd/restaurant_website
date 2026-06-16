import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import BanquetPage from "./pages/BanquetPage/BanquetPage"
const paths = [
  "/",
  "/banquet"
]

const element = [
  <Home />,
  <BanquetPage />,
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
