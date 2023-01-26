// action types
export const ADD_NEW_HABIT = 'ADD_NEW_HABIT';
export const UPDATE_HABIT = 'UPDATE_HABIT';
export const UPDATE_STATUS = 'UPDATE_STATUS';

// action creators
export function addNewHabit(habit) {
    return {
        type: ADD_NEW_HABIT,
        payload: habit,
    }
}

export function updateHabit(habit) {
    return {
        type: UPDATE_HABIT,
        payload: habit,
        id: habit.id
    }
}

export function updateStatus(title, status, date) {
    return {
        type: UPDATE_STATUS,
        title,
        status,
        date
    }
}