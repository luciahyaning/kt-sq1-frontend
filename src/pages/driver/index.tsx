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
import {NavigationBar} from "../../components/navbar";
const Driver: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
   <NavigationBar/>
      <Container className='mt-4'>
        <Card body>
          <Main />
        </Card>
      </Container>
    </>

  );
};

export default Driver;
