import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create' element={<CreatePage/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
