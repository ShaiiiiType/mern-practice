import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <>
      <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>

        <Route element={<ProtectedRoute/>}>
          <Route path='/create' element={<CreatePage/>}></Route>
        </Route>
      </Routes>
      </div>
    </>
  )
}

export default App
