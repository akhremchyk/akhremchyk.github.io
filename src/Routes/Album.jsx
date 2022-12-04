import * as albumsSelectors from "../redux/albums/selectors";
import * as usersSelectors from "../redux/users/selectors";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useMemo} from "react";
import fetchAlbums from "../redux/albums/actions";
import fetchUsers from "../redux/users/actions";
import * as photosSelector from "../redux/photos/selectors";
import fetchPhotos from "../redux/photos/actions";
import useFetching from "../redux/hooks/useFetching";

export const Album = () => {
    const navigate = useNavigate();
    const id = useParams().id.toString();

    const users = useSelector(usersSelectors.data);
    const photos = useSelector(photosSelector.data);
    const albums = useSelector(albumsSelectors.data);

    const albumsStatus = useFetching(fetchAlbums(), albumsSelectors.status);
    const usersStatus = useFetching(fetchUsers(), usersSelectors.status);
    const photosStatus = useFetching(fetchPhotos(), photosSelector.status);

    const currentAlbum = useMemo(() => albums.find(album => album.id.toString() === id), [id, albums]);
    const albumUser = useMemo(() => users.find(user => user.id.toString() === currentAlbum?.userId.toString()), [users, currentAlbum])
    const albumPhotos = useMemo(() => photos.filter(photo => photo.albumId.toString() === id), [id, photos]);

    if (albumsStatus === "loading" || usersStatus === "loading" || photosStatus === "loading") {
        return <div>Loading...</div>
    }

    if (albumsStatus === "success" && usersStatus === "success" && photosStatus === "success") {
        if (currentAlbum === undefined) {
            navigate("/404");
        }
        return (
            <div className="pl-20 pt-20 text-2xl text-slate-500">
                <div className="text-3xl text-black">{currentAlbum?.title}</div>
                <div className="pb-5">Created by: {albumUser?.name}</div>
                <div className="grid grid-cols-5 gap-5">{albumPhotos.map(photo => <img key={photo.id} alt="So, nvidia - fuck you!" src={photo.thumbnailUrl}/>)}</div>
            </div>
        )
    }

    return (
        <div>Some error occurred. Check out your browser console and try to reload this page.</div>
    )
}