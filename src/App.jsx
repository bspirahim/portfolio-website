
import './App.css'
import Navber from './components/Navber/Navber'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navber></Navber>
      <Home></Home>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
