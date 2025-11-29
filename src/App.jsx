import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import Career from './components/Career';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
     <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>

          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
     </Router>
  );
}

export default App;
