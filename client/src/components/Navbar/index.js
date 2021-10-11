import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavBarElements"
// import logo from './logo.png';
const Navbar = () => {
    return(
        <div>
            <Nav>
                <NavLink to="/" ><h1>LogoSpot</h1></NavLink>
                <Bars />
                <NavMenu>
                    <img src="logo.png" alt="BGSC Logo" className="logo" /> 
                    <NavLink to="/profile" activeStyle>Profile</NavLink>
                    <NavLink to="/allcharities" activeStyle>All Charities</NavLink>
                    <NavLink to="/addcharity" activeStyle>Add Charity</NavLink>
                    <NavLink to="/logout" activeStyle>logout</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin"> Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}
export default Navbar;