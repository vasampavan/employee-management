
import './App.css'
import FooterComponent from './components/FooterComponent'
import EmployeeComponent from './components/EmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployee from './components/ListEmployee'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<ListEmployee/>}></Route>
      <Route path='/employees' element={<ListEmployee/>}></Route>
      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
      <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
     </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
