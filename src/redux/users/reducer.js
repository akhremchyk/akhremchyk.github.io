const DEFAULT_STATE = {
    data: [],
    status: "idle",
    error: null,
}

export const USERS_FETCH_START = "USER/FETCH/START";
export const USERS_FETCH_SUCCESS = "USER/FETCH/SUCCESS";
export const USERS_FETCH_FAILURE = "USER/FETCH/FAILURE";

export default function usersReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case USERS_FETCH_START:
            return {...state, status: "loading"};
        case USERS_FETCH_SUCCESS:
            return {...state, status: "success", data: [...state.data, ...action.payload]};
        case USERS_FETCH_FAILURE:
            return {...state, status: "failure", error: action.payload};
        default:
            return state;
    }
}