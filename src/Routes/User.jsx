import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import fetchUsers from "../redux/users/actions";
import {useMemo} from "react";
import * as usersSelectors from "../redux/users/selectors";
import * as albumsSelectors from "../redux/albums/selectors";
import fetchAlbums from "../redux/albums/actions";
import useFetching from "../redux/hooks/useFetching";

export const User = () => {
    const userId = useParams().id;
    const users = useSelector(usersSelectors.data);
    const albums = useSelector(albumsSelectors.data);

    const usersStatus = useFetching(fetchUsers(), usersSelectors.status);
    const albumsStatus = useFetching(fetchAlbums(),albumsSelectors.status);

    const currentUser = useMemo(() => users.find(user => user.id.toString() === userId.toString()), [userId, users]);
    const userAlbums = useMemo(() => albums.filter(album => album.userId.toString() === userId.toString()), [userId, albums]);

    if (albumsStatus === "loading" || usersStatus === "loading") {
        return (
            <div>Loading...</div>
        )
    }

    else if (albumsStatus === "success" && usersStatus === "success") {
        return (
            <div className="pl-20 pt-20">
                <div className="text-3xl">{currentUser.name}</div>
                <div className="text-xl text-slate-500">Username: {currentUser.username}</div>
                <div className="text-xl text-slate-500">Email: {currentUser.email}</div>
                <div className="text-xl text-slate-500 pb-3">Phone: {currentUser.phone}</div>
                <div className="text-xl text-slate-500">

                    <div className="text-xl text-slate-500">User albums: </div>
                    <ul>
                        {userAlbums.map(album =>
                            <Link key={album.id} to={`/albums/${album.id}`}>
                                <li className="text-indigo-800 underline">{album.title}</li>
                            </Link>)
                        }
                    </ul>

                </div>
            </div>
        )
    }

    return (
        <div>Some error occured. Check out your browser console and try to reload this page.</div>
    )
}