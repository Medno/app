import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = (props) => {
	return (
	<div>
		<Navbar expand="md" className="navbar-dark">
			<Navbar.Brand href="/">Philippe Chadenier</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
  			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto navbar-inverse" navbar >
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/portfolio">Portfolio</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</div>
	);
}

export default Navigation;
