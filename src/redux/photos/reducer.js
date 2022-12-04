const DEFAULT_STATE = {
    data: [],
    status: "idle",
    error: null,
}

export const PHOTOS_FETCH_START = "PHOTOS/FETCH/START";
export const PHOTOS_FETCH_SUCCESS = "PHOTOS/FETCH/SUCCESS";
export const PHOTOS_FETCH_FAILURE = "PHOTOS/FETCH/FAILURE";

export default function photosReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case PHOTOS_FETCH_START:
            return {...state, status: "loading"};
        case PHOTOS_FETCH_SUCCESS:
            return {...state, status: "success", data: [...state.data, ...action.payload]};
        case PHOTOS_FETCH_FAILURE:
            return {...state, status: "failure", error: action.payload};
        default:
            return state;
    }
}