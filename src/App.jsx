import { Routes, Route } from 'react-router-dom'
 import NavBar from "./components/Navbar/Navbar.jsx";
 import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Account from "./components/Account/Account.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBill from './components/Bill/AddBill.jsx';
import SignUp from './components/Account/AccountForm.jsx';
import EditBill from './components/Bill/EditBill.jsx';

function App() {

  return (
    <div className='wrap'>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/addbill" element={<AddBill />} />
          <Route path="/editbill/:id" element={<EditBill />} />
       </Routes>
    </div>
  )
}

export default App
