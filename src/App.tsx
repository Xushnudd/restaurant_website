import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"

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
