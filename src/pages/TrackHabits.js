import React, { useState } from 'react';
import { months } from '../utils/constants';
import { connect } from 'react-redux';
import Habit from '../components/Habit';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const CalenderTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 15rem;
`;

const Image = styled.img`
    width: 20px;
    height: 20px;
`;

function TrackHabits(props) {
    const { habits, dispatch } = props;

    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const currentDay = date.getDay();
    const currentDate = date.getDate();
    const editableDateRange = {
        from: currentDate - 5,
        to: currentDate
    }

    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);

    let weekDates = new Array();
    for (let i = 0; i < 7; i++) {
        weekDates[i] = (currentDate - (currentDay) + i);
    }

    const [dates, setDates] = useState(weekDates);

    function changeWeek(direction) {
        if (direction === 'prev') {
            // setMonth(month - 1);

            let updatedDates = dates.map((date) => {
                return date - 7;
            })

            setDates(updatedDates);

        } else if (direction === 'next') {
            // setMonth(month + 1);

            let updatedDates = dates.map((date) => {
                return date + 7;
            })

            setDates(updatedDates);

        }
    }

    console.log('dates', [...dates])

    return (
        <>
            <CalenderTitle>
                <Button
                    variant='light'
                    onClick={() => {
                        changeWeek('prev');
                    }}
                >
                    <Image src="https://cdn-icons-png.flaticon.com/512/507/507257.png" alt="left icon" />
                </Button>
                <h3>{`${months[month]} ${year}`}</h3>
                <Button
                    variant='light'
                    onClick={() => {
                        changeWeek('next');
                    }}
                >
                    <Image src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="right icon" />
                </Button>
            </CalenderTitle>
            {
                habits.map((habit, index) => {
                    return (
                        <Habit
                            habit={habit}
                            dispatch={dispatch}
                            key={`habit-${index}`}
                            dates={dates}
                            month={month}
                            year={year}
                            editableDateRange={editableDateRange}
                        />
                    )
                })
            }
        </>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(TrackHabits);