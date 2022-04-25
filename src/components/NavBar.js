import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Main from "../Main"
import Agents from "./Agents"
import Armory from "./Armory"
import Skins from "./Skins"
import Maps from "./Maps"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function NavBar() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">VALORANT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/agents">AGENTS</Nav.Link>
            <Nav.Link as={Link} to="/armory">GUNS</Nav.Link>
            <Nav.Link as={Link} to="/maps">MAPS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes >
        <Route path="/" element={<Main />} />
        <Route exact path="/agents" element={<Agents />} />
        <Route path="/armory" element={<Armory />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/armory/skins" element={<Skins />} />
      </Routes >
    </Router>

  )
}
