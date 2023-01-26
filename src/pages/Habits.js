import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { daysName } from '../utils/constants';
import styled from 'styled-components';
import AddHabit from '../components/AddHabit';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: flex-start; */
    flex-wrap: wrap;
    width: 70%;
    margin: 1rem auto;
    flex-direction: column;
`

const Label = styled.span`
      width: 40px;
      height: 40px;
      background: #0d6efd;
      color: white;
      border-radius: 50%;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0px 3px;
`

function Habits(props) {
    const { habits } = props;

    return (
        <>
            <FlexContainer>
                {habits.map((habit, index) => {
                    return <Card style={{ width: '100%', margin: '0.5rem 0' }} key={`habit-${index}`}>
                        <Card.Body>
                            <Card.Title>{habit.title}</Card.Title>
                            <Card.Text>
                                {habit.time}
                            </Card.Text>

                            <div>
                                {
                                    habit.days.map((day, index) => {
                                        if (day) {
                                            return <Label key={`day-${index}`}>{daysName[index]}</Label>
                                        }
                                    })
                                }
                            </div>

                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                })}
            </FlexContainer>
            <AddHabit />
        </>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Habits)