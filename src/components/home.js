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
					<h3>I have some skills in <b>C#</b>, <b>Unity</b>, <b>C++</b>, C, Python, Node.js, React.js.</h3>
					<h3>I really enjoy Unity and I want to go deeper, then I'm currently
					looking for an end of study internship as a Game Developer.</h3>
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
