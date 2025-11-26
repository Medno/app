import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import ListImages from './ListImages.js'
class Portfolio extends React.Component {
    componentDidMount() {
		document.title = "Portfolio | Philippe Chadenier"
	}

    render() {
        const projects = [
            "rush_hover.jpg",
            "rush_weapon.jpg",
            "rush_ui.jpg",
            "rush_battle.jpg",
            "rush_ice_spell.jpg",
            "rush_boss.jpg",
            "rush_boss_explosion.jpg",
            "splinter_begin_demo.png",
            "splinter_demo.png",
            "splinter_hint.png",
            "tank_shoot.png",
            "golf_3d.png",
            "sonic.png",
            "tower_defense.png",
            "hotline_miami.png",
            "coop_cubes.png",
            "pong.png",
            "flappy_bird.png",
        ].map(title => require(`../static/projects/${title}`))

        const in_the_shadows_links = [
            "https://github.com/Medno/In-The-Shadows/raw/media/in_the_shadows_demo.gif",
            "https://github.com/Medno/In-The-Shadows/raw/media/main_menu.png",
            "https://github.com/Medno/In-The-Shadows/raw/media/level_selection.png",
            "https://github.com/Medno/In-The-Shadows/raw/media/level.png"
        ]

        const scop_links = [
            "https://github.com/Medno/Scop/raw/master/new_maya_demo.gif",
            "https://github.com/Medno/Scop/raw/master/lotus_normals.png"
        ]
        const avm_links = [
            "https://github.com/Medno/AbstractVM/raw/media/avm_demo.gif"
        ]
        const shell_gradius_links = [
            "https://github.com/Medno/shell_gradius/raw/media/shell_gradius_demo.gif"
        ]
        return (
            <Container>
                <Tabs defaultActiveKey="Unity">
                    <Tab eventKey="Unity" title="Unity" >
                        <ListImages images={in_the_shadows_links} title="In The Shadows" />
                        <ListImages images={projects}  title="Other Unity projects" />
                    </Tab>
                    <Tab eventKey="C++" title="C++">
                        <ListImages images={scop_links} title="Scop" />
                        <ListImages images={shell_gradius_links} title="Shell Gradius" />
                        <ListImages images={avm_links} title="AbstractVM" />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default Portfolio;
