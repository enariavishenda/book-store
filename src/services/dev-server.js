import {logIn} from "../actions/actions";


const fetchLogin = () => {
    return dispatch => {
        fetch('/users')
            .then(res => res.json())
            .then(users => {
                console.log('dispatch ',users)
                dispatch(logIn(users))
            });
    }
}

export default fetchLogin