import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MoblieIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavBarElements";

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="./ ">Dot Austere</NavLogo>
          <MoblieIcon onClick={toggle}>
            <FaBars />
          </MoblieIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up </NavLinks>
            </NavItem>
          </NavMenu>
           <NavBtn><NavBtnLink to="/signin">Sign In</NavBtnLink></NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
