import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
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
					<p>I'm a French Data Engineer, currently working at <Card.Link href="https://www.doctrine.fr">Doctrine</Card.Link> and former student at <Card.Link href="https://42.fr">42 Paris</Card.Link>
						.</p>
					<br />
					<p>Feel free to have a look at my <Link to='/portfolio'>portfolio</Link>. You can find a large part of my projects on GitHub.</p>
					<br />
					Do you have any questions ? <a href="mailto: medno.pc@gmail.com">Contact me</a>.
				</div>
		</Container>
		);
	}
}

export default Home;
