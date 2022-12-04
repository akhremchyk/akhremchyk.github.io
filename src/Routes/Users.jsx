import {useSelector} from 'react-redux';
import fetchUsers from "../redux/users/actions";
import {Link} from "react-router-dom";
import * as usersSelectors from '../redux/users/selectors';
import useFetching from "../redux/hooks/useFetching";

export const Users = () => {
    const userStatus = useFetching(fetchUsers(), usersSelectors.status);
    const users = useSelector(usersSelectors.data);

    if (userStatus === "loading") {
        return <div>Loading...</div>;
    }
    else if (userStatus === "success") {
        return (
            users.map(user =>
                <Link key={user.id} to={`/users/${user.id}`}>
                    <div className="text-2xl pl-20 pb-2.5">{user.name}</div>
                </Link>
            )
        )
    }
    return (
        <div>Some error occurred. Check out your browser console and try to reload this page.</div>
    )
}