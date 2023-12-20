import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';


const NavBar = () => {
  return (
    <>
      <Navbar style={{ borderBottom: '2px solid black', marginBottom: '3rem' }}>
        <Container>
          <Navbar.Brand><Link className='nav-link' to="/">Brills</Link></Navbar.Brand>
          <Nav className="nav-list ms-auto">
            <Nav.Link><Link className='nav-link' to="/dashboard">Dashboard</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/profile">Account</Link></Nav.Link>
            <Button className='align-self-center py-0'><Link className='nav-link' to="/signup">Signup</Link></Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

