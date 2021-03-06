let initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

const STEP_ONE = 'STEP_ONE';
const STEP_TWO = 'STEP_TWO';
const STEP_THREE = 'STEP_THREE';
const CANCEL = 'CANCEL';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case STEP_ONE:
            return Object.assign({}, state, { name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zipcode })
        case STEP_TWO:
            return Object.assign({}, state, { img: action.payload.img })
        case STEP_THREE:
            return Object.assign({}, state, { mortgage: action.payload.mortgage, rent: action.payload.rent })
        case CANCEL:
            return action.payload
        default: return state;
    }
}

export function stepOne(wiz1) {
    return {
        type: STEP_ONE,
        payload: wiz1
    }
}

export function stepTwo(wiz2) {
    return {
        type: STEP_TWO,
        payload: wiz2
    }
}

export function stepThree(wiz3) {
    return {
        type: STEP_THREE,
        payload: wiz3
    }
}

export function cancel() {
    return {
        type: CANCEL,
        payload: initialState
    }
}