import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function useFetching(request, selector) {
    const dispatch = useDispatch();
    const status = useSelector(selector);

    useEffect(() => {
        if (status === "idle") {
            dispatch(request)
        }
    }, [dispatch, status, request])

    return status;
}