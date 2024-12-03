

import './App.css'
import Navbar from './Components/1_Navbar/Navbar'
import Hero from './Components/2_Hero/Hero';
import Main from './Components/3_Main/Main';
import About from './Components/4_About/About';
import Products from './Components/5_Products/Products';
import Service from './Components/6_Service/Service';
import Footer from './Components/7_Footer/Footer';
import Sckroll from "./Components/SckrollUp/sckroll";

function App() {

  return (
    <div id='up'>

      <Navbar />
      <Hero />
      <Main />
      <About />
      <Products />
      <Service />
      <Footer />
      <Sckroll />

    </div>
  )
}

export default App
