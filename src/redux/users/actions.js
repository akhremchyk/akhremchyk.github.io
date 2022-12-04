import {USERS_FETCH_START, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE} from "./reducer";
import Api from "../../utils/Api";

const fetchUserStartAction = () => {
    return {type: USERS_FETCH_START};
}
const fetchUserSuccessAction = (users) => {
    return {type: USERS_FETCH_SUCCESS, payload: users};
};

const fetchUserFailureAction = (err) => {
    return {type: USERS_FETCH_FAILURE, payload: err};
};

export default function fetchUsers() {
    return async function(dispatch) {
        dispatch(fetchUserStartAction());
        try {
            const users = await Api.getUsers();
            dispatch(fetchUserSuccessAction(users));
        } catch (e) {
            console.error(e);
            dispatch(fetchUserFailureAction(e));
        }
    }
}