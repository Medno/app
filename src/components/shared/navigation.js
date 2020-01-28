import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
	return (
	<div>
		<Navbar expand="md" className="navbar-dark">
			<NavLink style={{fontSize: '18px'}} to="/">Philippe Chadenier</NavLink>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
  			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto navbar-inverse" navbar >
					<NavLink to="/">Home</NavLink>
					<NavLink to="/portfolio">Portfolio</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</div>
	);
}

export default Navigation;
