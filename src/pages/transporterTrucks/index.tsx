import React, { useState } from "react";
import { Header, Footer, Cards } from "components";
import { Main } from "./components/main";
import { Container } from "react-bootstrap";
import { Route, Switch, NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  NavbarText
} from 'reactstrap';
const Todo: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-3" >
              <NavLink  to="trucks" >Trucks</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Tranporter</NavbarText>
        </Collapse>
      </Navbar>
      <br/>
      <Container>
        <Card body>
          <Main />
        </Card>
      </Container>
    </>
  );
};

export default Todo;
