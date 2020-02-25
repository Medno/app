import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	componentDidMount() {
		document.title = "Home | Philippe Chadenier"
	}

	render() {
		const imgSize = 200
		return (
		<Container style={{margin: '40px auto'}}>
				<Image src={require('../static/pchadeni.JPG')} alt="" width={imgSize} height={imgSize} className="img-thumbnail" roundedCircle/>
				<h2>Hi there, I'm Philippe.</h2>
				<div style={{margin:'25px 40px'}}>
					<h3>I'm a French student finishing his senior degree at <b>42 Paris</b>.</h3>
					<h3>I have some skills in <b>Python</b>, <b>C</b>, <b>C#</b>, <b>Unity</b>, C++, Node.js, React.js.</h3>
					<h3>Currently working on : <b>Gomoku</b>, a five in a row game, with an AI. Stack : Python and Unity</h3>
					<br />
					<h6>Feel free to have a look at my <Link to='/portfolio'>portfolio</Link>. You can find a large part of my projects on GitHub.</h6>
					<br />
					Do you have any questions ? <a href="mailto: medno.pc@gmail.com">Contact me</a>.
				</div>
		</Container>
		);
	}
}

export default Home;
