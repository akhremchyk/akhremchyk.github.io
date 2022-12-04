import {ALBUMS_FETCH_START, ALBUMS_FETCH_SUCCESS, ALBUMS_FETCH_FAILURE} from "./reducer";
import Api from "../../utils/Api";

const fetchAlbumsStartAction = () => {
    return {type: ALBUMS_FETCH_START};
}
const fetchAlbumsSuccessAction = (users) => {
    return {type: ALBUMS_FETCH_SUCCESS, payload: users};
};

const fetchAlbumsFailureAction = (err) => {
    return {type: ALBUMS_FETCH_FAILURE, payload: err};
};

export default function fetchAlbums() {
    return async function(dispatch) {
        dispatch(fetchAlbumsStartAction());
        try {
            const users = await Api.getAlbums();
            dispatch(fetchAlbumsSuccessAction(users));
        } catch (e) {
            console.error(e);
            dispatch(fetchAlbumsFailureAction(e));
        }
    }
}