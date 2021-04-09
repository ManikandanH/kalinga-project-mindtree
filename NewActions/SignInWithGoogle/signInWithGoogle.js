import showSnackBar from '../SnackBar/showSnackBarAction'
import firebase from 'firebase'
import * as config from '../../config'
import {registerInBackend} from '../SignUpUser/registerWithFirebase'
import {fetchDetailsBackend} from '../user/signIn' 


const signInWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    let fName, lName, email, uid, gender = null, isNewUser;
    return dispatch => {
        return config.fire.auth().signInWithPopup(provider)
            .then((result) => {
                fName = result.additionalUserInfo.profile.given_name;
                lName = result.additionalUserInfo.profile.family_name;
                email = result.additionalUserInfo.profile.email;
                uid = result.user.uid;
                isNewUser = result.additionalUserInfo.isNewUser;
                if (result.additionalUserInfo.profile.gender) {
                    if (result.additionalUserInfo.profile.gender === 'male')
                        gender = "Male";
                    else
                        gender = "Female"
                }
                if (isNewUser)
                    dispatch(registerInBackend({
                        UID: uid,
                        FirstName: fName,
                        LastName: lName,
                        Email: email,
                        Gender: gender,
                        Address: {
                            Street: "",City: "", State: "",
                            Pincode: ""
                        },
                        DateOfBirth:new Date("1901-01-01")
            
                    }));
                else
                    dispatch(fetchDetailsBackend(uid));
            })
            .catch(err=>{
                dispatch(showSnackBar({message:"Network Issues",type:"error"}))
            })
    }
}

export default signInWithGoogle;
