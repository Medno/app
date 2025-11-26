import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MediumArticles from './medium/articles.js'

class Posts extends React.Component {
	componentDidMount() {
		document.title = "Posts | Philippe Chadenier"
	}

	render() {
		const imgSize = 200
		return (
		<Container style={{margin: '40px auto'}}>
			<h2>Posts</h2>
			<div style={{margin:'25px 40px'}}>
				<MediumArticles />
			</div>
		</Container>
		);
	}
}

export default Posts;
