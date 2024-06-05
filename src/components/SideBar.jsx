import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BsFillGridFill, BsFillLayersFill, BsFillBarChartFill, BsTable, BsPeople, BsExclamationCircle, BsBook } from 'react-icons/bs';

const SideBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="d-flex flex-column  p-3 h-100" >
            <>
                <Form className="mb-3 mt-5">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ backgroundColor: 'transparent' }} />
                </Form>
                <Nav className="flex-column">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Nav.Link href="#dashboard" className="d-flex align-items-center">
                            <BsFillGridFill className="mr-2" /> Dashboard
                        </Nav.Link>
                        <Button variant="danger" size="sm" className="ml-auto">New</Button>
                    </div>
                    <Nav.Link href="#uielements" className="d-flex align-items-center">
                        <BsFillLayersFill className="mr-2" /> UI Elements
                    </Nav.Link>
                    <Nav.Link href="#formelements" className="d-flex align-items-center">
                        <BsFillGridFill className="mr-2" /> Form Elements
                    </Nav.Link>
                    <Nav.Link href="#charts" className="d-flex align-items-center">
                        <BsFillBarChartFill className="mr-2" /> Charts
                    </Nav.Link>
                    <Nav.Link href="#tables" className="d-flex align-items-center">
                        <BsTable className="mr-2" /> Tables
                    </Nav.Link>
                    <Nav.Link href="#icons" className="d-flex align-items-center">
                        <BsTable className="mr-2" /> Icons
                    </Nav.Link>
                    <Nav.Link href="#userpages" className="d-flex align-items-center">
                        <BsPeople className="mr-2" /> User Pages
                    </Nav.Link>
                    <Nav.Link href="#errorpages" className="d-flex align-items-center">
                        <BsExclamationCircle className="mr-2" /> Error Pages
                    </Nav.Link>
                    <Nav.Link href="#documentation" className="d-flex align-items-center">
                        <BsBook className="mr-2" /> Documentation
                    </Nav.Link>
                </Nav>
                <div className="mt-auto">
                    <Nav className="flex-column">
                        <Nav.Link href="#sales" className="text-danger">#Sales</Nav.Link>
                        <Nav.Link href="#marketing" className="text-success">#Marketing</Nav.Link>
                    </Nav>
                </div>
            </>

        </Navbar>
    );
};

export default SideBar;
