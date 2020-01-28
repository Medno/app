import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import ListImages from './ListImages.js'

const Portfolio = (props) => {
    const projects = ["flappy_bird", "pong", "coop_cubes", "tower_defense", "sonic", "golf_3d"].map(title => require(`../imgs/projects/${title}.png`))

    const in_the_shadows_links = [
        "https://github.com/Medno/In-The-Shadows/raw/media/in_the_shadows_demo.gif",
        "https://github.com/Medno/In-The-Shadows/raw/media/main_menu.png",
        "https://github.com/Medno/In-The-Shadows/raw/media/level_selection.png",
        "https://github.com/Medno/In-The-Shadows/raw/media/level.png"
    ]
	return (
        <Container>
            <Tabs defaultActiveKey="Unity">
                <Tab eventKey="Unity" title="Unity" >
                    <ListImages images={in_the_shadows_links} title="In The Shadows" />
                    <ListImages images={projects}  title="Other Unity projects" />
                </Tab>
                <Tab eventKey="C++" title="C++" disabled>
                    On construction...
                </Tab>
            </Tabs>
        </Container>
	);
}

export default Portfolio;
