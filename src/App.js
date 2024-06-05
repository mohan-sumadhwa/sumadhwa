import ContactUs from './components/ContactUs';
import About from './components/About';
import Home from './components/Home';
import './styles/style.css';
import {Routes, Route} from 'react-router-dom';
import ProcessOptimization from './components/services/ProcessOptimization';
import TechnologicalSolutions from './components/services/TechnologicalSolutions';
import Sustainability from './components/services/Sustainability';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>        
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services/process-optimization' element={<ProcessOptimization />}></Route>
        <Route path='/services/technological-solutions' element={<TechnologicalSolutions />}></Route>
        <Route path='/services/sustainability' element={<Sustainability />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
      <ScrollToTop />
    </div>
      
  );
}

export default App;
