import * as actionTypes from '../NewActions/'

const initialState = {
    open:false,
    message:"",
    type:"success"
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.SHOW_SNACKBAR:
            return {
                open: true,
                message:action.payload.message,
                type:action.payload.type
            }
        case actionTypes.CLOSE_SNACKBAR:
            return {...state,open:false}
       
        default:
            return state;
    }
}