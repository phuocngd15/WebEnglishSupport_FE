import React, { useState } from 'react';
import logo from '../Sass/Asset/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from './Authentication/Authentication';
import Review from './Review/Review';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import WordCard from '../Comopents/Card/WordCard';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import ByWord from './LearnVocabulary/ByWord';
import ByStories from './LearnVocabulary/ByStories';
const h = window.innerHeight;

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">The English's Koi</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Home">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Learn vocabulary
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/Cards">
                    Cards
                  </DropdownItem>
                  <DropdownItem href="/Stories">
                    Stories
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Review
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/phuocngd15/WebSupportLearningEnglish">GitHub's Project</NavLink>
              </NavItem>
            </Nav>
            <NavLink href='/login'>Sign In</NavLink>
            <NavLink href='/regrister'>Sign Up</NavLink>
          </Collapse>
        </Navbar>
        <div className='main'>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={ByWord} />
          <Route path="/Cards" component={ByWord} />
          <Route path="/Stories" component={ByStories} />
          <Route path="/login" component={Authentication} />
        </div>
      </Router>
    </div>
  );
}

export default Layout;
