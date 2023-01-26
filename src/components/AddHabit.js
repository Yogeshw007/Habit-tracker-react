import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from "react-redux";
import { addNewHabit } from "../actions";
import { daysName } from "../utils/constants";

function AddHabit(props) {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [days, setDays] = useState(
        new Array(daysName.length).fill(false)
    );
    const [daily, setDaily] = useState(false);
    const [visible, setVisible] = useState(false);
    const { state, dispatch } = props;

    function toggleAddHabitForm() {
        setVisible(!visible);
    }

    function updateDays(index) {
        let updatedDays = [...days];
        updatedDays[index] = !days[index];

        setDays(updatedDays);
    }

    function handleHabitSubmit(e) {
        e.preventDefault();

        let daysChecked = days;

        if (daily) {
            daysChecked = new Array(daysName.length).fill(true);
        }

        const newHabit = {
            title,
            time,
            days: daysChecked
        }

        dispatch(addNewHabit(newHabit));
    }

    if (!visible) {
        return <Button style={styles.addHabitBtn} onClick={toggleAddHabitForm}>+ Add habit</Button>
    } else {
        return (
            <Form style={{ width: '35vw', ...styles.addHabitForm }} onSubmit={handleHabitSubmit}>
                <Form.Group className="mb-3" controlId="formHabit">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter habit"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>When : </Form.Label>
                    <Form.Check
                        type="checkbox"
                        label='Daily'
                        name='daily'
                        onChange={(e) => setDaily(!daily)}
                        checked={daily}
                    />
                </Form.Group>
                <Form.Group>
                    {
                        daysName.map((dayName, index) => {
                            return (
                                <Form.Check
                                    type="checkbox"
                                    label={dayName}
                                    name={dayName}
                                    onChange={(e) => {
                                        updateDays(index);
                                    }}
                                    key={`day-${dayName}`}
                                    checked={days[index]}
                                />

                            )
                        })
                    }
                </Form.Group>
                <Form.Group>
                    <Button
                        variant="secondary"
                        type="submit"
                        onClick={toggleAddHabitForm}
                    >
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>


            </Form>
        )
    }
}

const styles = {
    addHabitForm: {
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        border: '2px solid grey',
        borderRadius: 5,
        padding: '1rem',
        zIndex: 1,
        backgroundColor: 'lightgrey'
    },
    addHabitBtn: {
        position: 'fixed',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1
    }
}


function mapStateToProps(state) {
    return {
        state: { ...state }
    }
}

export default connect(mapStateToProps)(AddHabit);