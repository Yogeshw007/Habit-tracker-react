import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import { daysName, months, statusImages } from '../utils/constants';
import { updateStatus } from '../actions';
import UpdateHabit from './UpdateHabit';

const Image = styled.img`
    width: 5px;
    height: 5px;
`;

const Title = styled.h5`
    margin-left: 3rem;
    margin-bottom: 1rem;
`;

function Habit(props) {
    const { habit, dispatch, dates, month, year, editableDateRange } = props;
    const currentDate = new Date().getDate();

    function handleUpdateStatus(title, status, date) {
        let dateObj = new Date();
        dateObj.setDate(date);

        dispatch(updateStatus(title, status, dateObj));
    }

    return <Container style={styles.habit}>
        <Row>
            <Col xs={10}>
                <Title>{habit.title}</Title>
            </Col>
            <Col>
                {habit.time}
            </Col>
        </Row>
        <Row >
            {
                daysName.map((day, index) => {
                    return <Col key={index} style={styles.cell}>
                        <p style={{ fontSize: '0.8rem' }}>{`${day} - `}{<b>{`${dates[index]}`}th</b>}</p>
                    </Col>
                })
            }
        </Row>
        <Row>
            {
                dates.map((date, index) => {
                    let stylesObj = {
                        ...styles.cell
                    }

                    if (dates[index] <= currentDate) {
                        return <Col key={index} style={stylesObj}>
                            <div style={styles.flexCenter}>
                                {
                                    habit.statuses[`day${date}${months[month]}${year}`] ?
                                        <Image src={statusImages[habit.statuses[`day${date}${months[month]}${year}`]]} alt="status-icon" style={styles.statusIcon} />
                                        :
                                        <Image src={statusImages['NONE']} alt="status-icon" style={styles.statusIcon} />
                                }
                            </div>
                            <UpdateHabit
                                date={date}
                                habit={habit}
                                index={index}
                                handleUpdateStatus={handleUpdateStatus}
                                editableDateRange={editableDateRange}
                            />
                        </Col>
                    } else {
                        return <Col key={index} style={{ ...stylesObj, backgroundColor: '#ff9191', ...styles.flexCenter }}>
                            N/A
                        </Col>
                    }
                })
            }
        </Row>
    </Container>
}

const styles = {
    cell: {
        border: '1px solid grey',
        padding: 3
    },
    statusIcon: {
        width: 40,
        height: 40,
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    currentDay: {
        backgroundColor: 'lightgreen'
    },
    habit: {
        padding: '1rem 0px'
    }
}

export default Habit;