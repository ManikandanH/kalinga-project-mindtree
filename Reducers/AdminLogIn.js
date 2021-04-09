var value = sessionStorage.getItem("admintoken");
var tokenobj = JSON.parse(value);

const functoken = () => {
    if (sessionStorage.getItem("admintoken") !== null) {
        return {
            isadmin: true,
            token: tokenobj
        }
    }
    else {
        return {
            isadmin: false,
            token: ""
        }
    }
}



export default function (state = functoken(), action) {
    switch (action.type) {
        case "REQUEST_LOGINADMIN":
            {

                var value = sessionStorage.getItem('admintoken');
                var obj = JSON.parse(value);

                return {
                    isadmin: true,
                    token: obj
                }
            }
            case "REQUEST_LOGOUTADMIN":
            return {
                isadmin: false,
                token: ""
            }

        default:
            return state
    }

}