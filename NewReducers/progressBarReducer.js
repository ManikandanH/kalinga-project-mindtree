import * as actionTypes from '../NewActions/'

const initialState = {
    startProgressBar: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.SHOW_PROGRESS_BAR:
            return {
                startProgressBar: true
            }
        case actionTypes.STOP_PROGRESS_BAR:
            return {
                startProgressBar: false
            }
        default:
            return state;
    }
}