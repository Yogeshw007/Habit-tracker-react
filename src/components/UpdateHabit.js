import React, { useState } from 'react';
import styled from 'styled-components';
import { DONE, NOT_DONE, NONE, statusImages } from '../utils/constants';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
`;

const Button = styled.button`
    width: '20px';
    height: '20px';
    border: none;
    outline: none;
    background: none;
    margin: 8px 3px 0px 3px;
    padding: 3px;
`;

const UpdateButton = styled.button`
    width: '20px';
    height: '20px';
    border: none;
    outline: none;
    background: none;
    margin: 8px 3px 0px 3px;
    padding: 3px;
    color: black;
    background-color: lightblue;
    /* box-shadow: 5px 5px lightgrey, -2px 2px lightgrey, 2px -2px lightgrey, -2px -2px lightgrey; */
    border-radius: 3px;
    font-size: 0.75rem;
`;

const Image = styled.img`
    width: 20px;
    height: 20px;
`;

function UpdateHabit(props) {

    const {
        habit,
        date,
        handleUpdateStatus,
        editableDateRange,
        handleUpdateStatusImage,
        index
    } = props;

    const [visible, setVisible] = useState(false);

    function toggleUpdateButtons() {
        setVisible(!visible);
    }

    if (editableDateRange.from <= date && date <= editableDateRange.to) {
        return (
            <FlexContainer>
                {
                    (visible === true ?
                        <>
                            <Button onClick={() => {
                                handleUpdateStatus(habit.title, DONE, date);
                                toggleUpdateButtons();
                                handleUpdateStatusImage(index, "DONE");
                            }}>
                                <Image src={statusImages["DONE"]} alt="done-icon" style={styles.image} />
                            </Button>
                            <Button onClick={() => {
                                handleUpdateStatus(habit.title, NOT_DONE, date)
                                toggleUpdateButtons();
                                handleUpdateStatusImage(index, "NOT_DONE");
                            }}>
                                <Image src={statusImages["NOT_DONE"]} alt="status-icon" style={styles.image} />
                            </Button>
                            <Button onClick={() => {
                                handleUpdateStatus(habit.title, NONE, date)
                                toggleUpdateButtons();
                                handleUpdateStatusImage(index, "NONE");
                            }}>
                                <Image src={statusImages["NONE"]} alt="status-icon" style={styles.image} />
                            </Button>
                        </>
                        :
                        <UpdateButton
                            onClick={toggleUpdateButtons}
                        >
                            Update
                        </UpdateButton>
                    )
                }
            </FlexContainer>
        )
    }
}

const styles = {
    border: {
        border: '1px solid grey',
    },
    statusIcon: {
        width: 50,
        height: 50
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    currentDay: {
        backgroundColor: 'lightgreen'
    }
}

export default UpdateHabit;