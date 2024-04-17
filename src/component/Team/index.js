import React from 'react'
import { Container, Row } from 'react-bootstrap';

function OurTeam() {
    return (
        <section id="teams" className="block teams-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our teams</h2>
                    <div className="subtitle">some of our experts</div>
                </div>
                <Row></Row>
            </Container>
        </section>
    )
}

export default OurTeam;