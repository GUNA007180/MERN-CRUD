import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Users';
import CreateUser from './Createuser';
import Updateuser from './Updateuser';



function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} ></Route>
          <Route path='/create' element={<CreateUser />} ></Route>
          <Route path='/update/:id' element={<Updateuser />} ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
