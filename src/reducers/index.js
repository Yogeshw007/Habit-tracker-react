// habit: [
//     {
//         name: '',
//         days: [],
//         statuses: [],
//          id: 1,
//
//     }
// ]

/*
    statuses = {
        day05Jan2023: 'NONE',
        day05Jan2023: 'NONE'
    }
*/

import {
    ADD_NEW_HABIT,
    UPDATE_HABIT,
    UPDATE_STATUS
} from '../actions';
import { months } from '../utils/constants';

const initialState = {
    habits: [],
    count: 0,
};

export default function habitReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_HABIT:
            const payload = {
                ...action.payload,
                statuses: {}
            }

            return {
                ...state,
                habits: [...state.habits, payload],
                count: state.count + 1
            }
        case UPDATE_HABIT:
            const indexOfHabit = action.id;

            const updatedHabits = state.habits.map((habit) => {
                if (habit.id === indexOfHabit) {
                    return action.payload;
                }

                return habit;
            });

            return {
                habits: updatedHabits,
                count: state.count + 1,
                statuses: {}
            }
        case UPDATE_STATUS:
            const updateDate = action.date;
            const month = updateDate.getMonth();
            const year = updateDate.getFullYear();
            const date = updateDate.getDate();

            const newHabits = state.habits.map((habit) => {
                if (action.title === habit.title) {
                    habit.statuses[`day${date}${months[month]}${year}`] = action.status;
                }
                return habit;
            })

            return {
                ...state,
                habits: newHabits
            }

        default:
            return state;
    }
};