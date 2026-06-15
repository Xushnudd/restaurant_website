import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"

const paths = [
  "/"
]

const element = [
  <Home />
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
