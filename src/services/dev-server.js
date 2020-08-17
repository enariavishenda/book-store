import {logIn} from "../actions/actions";


const fetchLogin = () => {
    return async dispatch => {
        const responce = await fetch('/users')
        const json = await responce.json()
        console.log('dispatch ', json)
        dispatch(logIn(json));
    }
}

export default fetchLogin