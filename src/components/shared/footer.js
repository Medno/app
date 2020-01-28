import React from 'react';
import { Col } from 'reactstrap';
import linkedin from '../../imgs/linkedin-3-64.png';
import github from '../../imgs/GitHub-Mark-Light-120px-plus.png';

const Footer = (props) => {
	const dimension = 30
	return (
		<footer>
			<Col sm="12" md={{ size: 6, offset: 3 }}>
				<a href="https://www.linkedin.com/in/philippe-chadenier" target="_blank" className="gray hint--top" data-hint="LinkedIn" rel="noopener noreferrer">
					<img alt="" src={linkedin} width={dimension} height={dimension} />
				</a>
				<a href="https://github.com/Medno" target="_blank" className="gray hint--top" data-hint="LinkedIn" rel="noopener noreferrer">
					<img alt="" src={github} width={dimension} height={dimension} />
				</a>
			</Col>
			<div>
				© 2020 Philippe Chadenier
			</div>
		</footer>
	);
}

export default Footer;
