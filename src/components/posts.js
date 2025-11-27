import React from 'react';
import { Container } from 'react-bootstrap';
import MediumArticles from './medium/articles.js'

class Posts extends React.Component {
	componentDidMount() {
		document.title = "Posts | Philippe Chadenier"
	}

	render() {
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
