import './App.css';
import Headerj from './components/Headerj';
import Cart from './components/cartData/Cart';
import Index from './components/Index';
import Footer from './components/Footer'
import {Route,BrowserRouter, Routes } from 'react-router-dom';
import Banner from '../src/components/banner';
import Login from './components/Login-Signup/Login';
import SignUp from './components/Login-Signup/SignUp';


function App() {

  return (
    
   <div className="App side subRoot" style={{position:'relative'}}>
          <Headerj />
          {<Banner />}
      <BrowserRouter>
      <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/1' element={<Index/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
