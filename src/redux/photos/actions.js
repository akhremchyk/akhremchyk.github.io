import {PHOTOS_FETCH_START, PHOTOS_FETCH_SUCCESS, PHOTOS_FETCH_FAILURE} from "./reducer";
import Api from "../../utils/Api";

const fetchPhotosStartAction = () => {
    return {type: PHOTOS_FETCH_START};
}
const fetchPhotosSuccessAction = (users) => {
    return {type: PHOTOS_FETCH_SUCCESS, payload: users};
};

const fetchPhotosFailureAction = (err) => {
    return {type: PHOTOS_FETCH_FAILURE, payload: err};
};

export default function fetchPhotos() {
    return async function(dispatch) {
        dispatch(fetchPhotosStartAction());
        try {
            const users = await Api.getPhotos();
            dispatch(fetchPhotosSuccessAction(users));
        } catch (e) {
            console.error(e);
            dispatch(fetchPhotosFailureAction(e));
        }
    }
}