import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {Logo} from './logo'
import {removeAuthTocken} from '../settings'
import {faSignOutAlt, faQuestion, faSitemap, faFileAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from '@reach/router'

export default props => {

    const handleSignOut = () => {
        removeAuthTocken();
        window.location.reload();
    }

    return (
    <Navbar bg="light" expand="lg" className="main-header">
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav className="mr-auto">
                <span className="logo-nav-gap"><Nav.Link href="/"><Logo/></Nav.Link></span>
                <Link to="/blueprint">Blueprint <FontAwesomeIcon icon={faSitemap}/></Link>
                <Link to="/questions">Questions <FontAwesomeIcon icon={faQuestion}/></Link>
                <Link to="/documents">Documents <FontAwesomeIcon icon={faFileAlt}/></Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
                <span> &nbsp; &nbsp; &nbsp; </span>
            </Nav>
            <Nav>
                <NavDropdown title={<FontAwesomeIcon icon={faUserCircle}/>}>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleSignOut}><FontAwesomeIcon icon={faSignOutAlt}/>&nbsp; Sign Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}