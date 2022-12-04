import {NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="h-full w-full">
            <header className="flex justify-end text-2xl pr-10 pt-10">
                <NavLink to="/" className="pr-5">Main</NavLink>
                <NavLink to="/users" className="pr-5">Users</NavLink>
                <NavLink to="/albums" className="pr-5">Albums</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}