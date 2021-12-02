import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, Container} from "react-bootstrap";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import {
    BrowserRouter as Router,
    Route,
    Routes,Switch,
    Link

} from "react-router-dom";
import Timetable from "./Timetable";
import Home from "./Home";
import AdminPanel from "./AdminPanel";


export default function NavBar() {
    return(
<></>
       /*<Router>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                <Navbar.Brand>Railway</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/timetable"}>Timetable</Nav.Link>
                        <Nav.Link as={Link} to={"/admin"}>Admin</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to="/login"><Button variant={"primary"} className="me-3">LogIn</Button></Link>
                        <Link to="/signup"><Button variant={"primary"} >SignUp</Button></Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/timetable" element={<Timetable/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>



            </Routes>
        </div>
        </Router>*/
    );
}