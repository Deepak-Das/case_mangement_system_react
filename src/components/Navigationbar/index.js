import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Icon & Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Associates</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  // return (
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <div className="container">
  //       <a className="navbar-brand" href="#home">
  //         Icon & Title
  //       </a>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //         onClick={() => setShow(!show)}
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div
  //         className={`collapse navbar-collapse ${show ? 'show' : ''}`}
  //         id="navbarSupportedContent"
  //       >
  //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  //           <li className="nav-item">
  //             <a className="nav-link active" aria-current="page" href="#home">
  //               Home
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#associates">
  //               Associates
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#cases">
  //               About
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#cases">
  //               Login
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default NavigationBar;
