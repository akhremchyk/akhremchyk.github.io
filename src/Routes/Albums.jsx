import * as albumsSelector from "../redux/albums/selectors";
import {useSelector} from "react-redux";
import fetchAlbums from "../redux/albums/actions";
import {Link} from "react-router-dom";
import useFetching from "../redux/hooks/useFetching";

export const Albums = () => {
    const albums = useSelector(albumsSelector.data)
    const albumStatus = useFetching(fetchAlbums(),albumsSelector.status);

    if (albumStatus === "loading") {
        return <div>Loading...</div>;
    }
    else if (albumStatus === "success") {
        return (
            <div>
                {
                    albums.map(album =>
                        <Link key={album.id} to={`/albums/${album.id}`}>
                            <div className="text-2xl pl-20 pb-2.5">{album.title}</div>
                        </Link>
                    )
                }
            </div>
        )
    }
    return (
        <div>Some error occurred. Check out your browser console and try to reload this page.</div>
    )
}