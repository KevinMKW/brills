import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css'

const NavBar = () => {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand href="#home">Brills</Navbar.Brand>
          <Nav className="nav-list ms-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#features">Account</Nav.Link>
            <Button>Signup</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

