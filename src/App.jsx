import { Routes, Route } from 'react-router-dom'
 import NavBar from "./components/Navbar/Navbar.jsx";
 import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Account from "./components/Account/Account.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBill from './components/Bill/AddBill.jsx';
import SignUp from './components/Account/AccountForm.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addbill" element={<AddBill />} />
       </Routes>
    </>
  )
}

export default App
