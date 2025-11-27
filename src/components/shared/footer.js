import React from 'react';
import { Col } from 'react-bootstrap';
import linkedin from '../../static/linkedin-3-64.png';
import github from '../../static/GitHub-Mark-Light-120px-plus.png';

const Footer = (props) => {
	const dimension = 30
	return (
		<footer id="footer">
			<Col sm="12" md={{ size: 6, offset: 3 }}>
				<a href="https://www.linkedin.com/in/medno" target="_blank" className="gray hint--top" data-hint="LinkedIn" rel="noopener noreferrer">
					<img alt="" src={linkedin} width={dimension} height={dimension} />
				</a>
				<a href="https://github.com/Medno" target="_blank" className="gray hint--top" data-hint="LinkedIn" rel="noopener noreferrer">
					<img alt="" src={github} width={dimension} height={dimension} />
				</a>
			</Col>
			<div>
				© 2025 Philippe Chadenier
			</div>
		</footer>
	);
}

export default Footer;
