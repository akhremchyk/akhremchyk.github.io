const DEFAULT_STATE = {
    data: [],
    status: "idle",
    error: null,
}

export const ALBUMS_FETCH_START = "ALBUM/FETCH/START";
export const ALBUMS_FETCH_SUCCESS = "ALBUM/FETCH/SUCCESS";
export const ALBUMS_FETCH_FAILURE = "ALBUM/FETCH/FAILURE";

export default function albumsReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ALBUMS_FETCH_START:
            return {...state, status: "loading"};
        case ALBUMS_FETCH_SUCCESS:
            return {...state, status: "success", data: [...state.data, ...action.payload]};
        case ALBUMS_FETCH_FAILURE:
            return {...state, status: "failure", error: action.payload};
        default:
            return state;
    }
}