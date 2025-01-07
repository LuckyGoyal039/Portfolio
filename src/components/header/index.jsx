import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { SocialIcon } from 'react-social-icons'
import './header.css'

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary outerContainer" bg="dark" data-bs-theme="dark">
            <Container className='headerOuter'>
                <Navbar.Brand className='textColor'>Lucky Goyal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='textColor'>Home</Nav.Link>
                        <Nav.Link href="#skills" className='textColor'>Skills</Nav.Link>
                        <Nav.Link href="#education" className='textColor'>Education</Nav.Link>
                        <Nav.Link href="#experience" className='textColor'>Work Experience</Nav.Link>
                        <Nav.Link href="#projects" className='textColor'>Projects</Nav.Link>
                        <Nav.Link href="#contact" className='textColor'>Contact</Nav.Link>
                        <Nav.Link href="#link" className='textColor'>View Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;