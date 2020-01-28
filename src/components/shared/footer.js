import React from 'react';
import {
	Row, Col
} from 'reactstrap';
import linkedin from '../../linkedin-3-64.png';

const Footer = (props) => {
	return (
		<footer>
			© 2020 Philippe Chadenier
			<Row>
        		<Col sm="12" md={{ size: 6, offset: 3 }}>
				<a href="https://www.linkedin.com/in/philippe-chadenier" target="_blank" className="gray hint--top" data-hint="LinkedIn" rel="noopener noreferrer">
				<img alt="" src={linkedin} width="20" height="20" />
		 		</a>
				</Col>
		    </Row>

		</footer>
	);
}

export default Footer;
