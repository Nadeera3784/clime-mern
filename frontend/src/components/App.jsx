import {Routes, Route } from 'react-router-dom';

import Home              from './Home/Home';
import Login             from './Login/Login';
import Register             from './Register/Register';

function App() {

  return (
    <Routes>
       <Route path="/" exact element={<Home/>}/>
       <Route path="/login" exact element={<Login/>}/>
       <Route path="/register" exact element={<Register/>}/>
    </Routes>
  )
}

export default App
