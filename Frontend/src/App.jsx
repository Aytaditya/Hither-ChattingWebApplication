import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/home/home'
import Login from './pages/login/login'
import SignUp from './pages/signup/signUp'
import {Toaster} from "react-hot-toast"

function App() {


  return (
   
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
     
      </Routes>
      <Toaster/>
    
   
    
    </div>
    
  )
}

export default App
