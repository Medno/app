import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText
} from 'reactstrap';

const Navigation = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
	<div>
		<Navbar expand="md">
			{/* <NavbarBrand href="/">Home</NavbarBrand> */}
			<NavbarText>Philippe Chadenier</NavbarText>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar >
					<NavItem>
						<NavLink href="/">Home</NavLink>
					</NavItem>

					<NavItem>
						<NavLink href="/portfolio/">Portfolio</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/about">About</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	</div>
	);
}

export default Navigation;