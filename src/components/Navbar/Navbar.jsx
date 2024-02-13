import { Link } from 'react-router-dom';
import { supabase } from "../../lib/helper/supabaseClient";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = () => {
  const user = supabase.auth.user();

  return (
    <>
      <Navbar style={{ borderBottom: '2px solid black', marginBottom: '3rem' }}>
        <Container>
          <Navbar.Brand><Link className='nav-link' to="/">Brills</Link></Navbar.Brand>
          {user ? (
            <Nav className="nav-list ms-auto">
              <Nav.Link><Link className='nav-link' to="/dashboard">Dashboard</Link></Nav.Link>
              <Nav.Link><Link className='nav-link' to="/profile">Account</Link></Nav.Link>
              <Button className='align-self-center py-0 bg-black'><Link className='nav-link text-white' to="/signup">Signup</Link></Button>
            </Nav>
          ) : (
            <Nav className="nav-list ms-auto">
              <Button className='align-self-center py-0 bg-black'><Link className='nav-link text-white' to="/signup">Signup</Link></Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

