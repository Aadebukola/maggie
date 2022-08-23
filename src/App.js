import Navbar from "./page/Navbar";
import Home from "./page/Home"
import About from "./page/About";
import Menu from "./page/Menu";
import Contact from "./page/Contact";
import Footer from "./page/Footer";
import MenuPage from "./extra/MenuPage";
import Main from "./extra/Main";
import Soup from "./extra/Soup"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='menu' element = {<Menu/>}/>
        <Route path='menupage' element = {<MenuPage/>}/>
        <Route path='main' element = {<Main/>}/>
        <Route path='soup' element = {<Soup/>}/>
        <Route path='contact' element = {<Contact/>}/>
      </Routes>
    <Footer/>
    </Router>
  
    </>
  );
}

export default App;
