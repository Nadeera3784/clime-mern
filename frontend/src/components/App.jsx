import {Routes, Route} from 'react-router-dom';

import Home          from '@/components/Home/Home';
import Login         from '@/components/Login/Login';
import Register      from '@/components/Register/Register';
import Dashboard     from '@/components/Dashboard/Dashboard';
import RequireAuth   from '@/components/Navigation/RequireAuth';

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/dashboard" exact element={
          <RequireAuth>
             <Dashboard/>
          </RequireAuth>
      }/>      
    </Routes>
  )
}

export default App
