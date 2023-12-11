import './app.scss';

import Home from'./components/Home';
import Xidmetler from'./components/Xidmetler';
import Mehsullar from'./components/Mehsullar';
import Heller from'./components/Heller';
import Elaq from'./components/Elaq';
import Haqqinda from'./components/Haqqinda';
import Qalereya from'./components/Qalereya';
import Erros from'./components/Erros';
import Navbar from './components/Navbar';
import {Routes ,Route} from'react-router-dom';
function App() {
  

  return (
    <div>
         <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Xidmetler' element={<Xidmetler />}></Route>
        <Route path='/Mehsullar' element={<Mehsullar />}></Route>
        <Route path='/Heller' element={<Heller />}></Route>
        <Route path='/Elaq' element={<Elaq />}></Route>
        <Route path='/Haqqinda' element={<Haqqinda />}></Route>
        <Route path='/Qalereya' element={<Qalereya />}></Route>
        <Route path='*' element={<Erros />}></Route>
      </Routes>
    </div>
  );
}

export default App;
