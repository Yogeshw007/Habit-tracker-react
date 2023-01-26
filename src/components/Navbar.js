import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const PageLink = styled.h5`
    padding-bottom: 2px;
    border-bottom: 1px solid white;
`;

const Logo = styled.h5`
    font-style: italic;
    text-align: center;
    background-color: #212529;
    color: white;
    margin-left: 3rem;
`

function Navbar() {
    return (
        <>
            <Nav bg="dark" variant="dark">

                <Container>
                    <Logo>Habit Tracker</Logo>
                    <Row>
                        <Col xs={6}>
                            <Link to={'/'} className="logo">
                                <PageLink>Habits</PageLink>
                            </Link>
                            <Link to={'/track-habits'} className="logo">
                                <PageLink>Weekly view</PageLink>
                            </Link>
                        </Col>
                    </Row>


                </Container>
            </Nav >
        </>
    )
}

export default Navbar;