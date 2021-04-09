import * as actionsTypes from '../index'
const showErrorAction=(details)=>{
    return {
        type:actionsTypes.SHOW_SNACKBAR,
        payload:{
            message:details.message,
            type:details.type
        }
    }
}


export default showErrorAction;