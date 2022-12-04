import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Layout} from "./Routes/Layout";
import {Main} from "./Routes/Main";
import {Users} from "./Routes/Users";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {User} from "./Routes/User";
import {Albums} from "./Routes/Albums";
import {Album} from "./Routes/Album";
import {NotFound} from "./Routes/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                index: true,
                element: <Main />,
            },
            {
                path: "404",
                element: <NotFound />,
            },
            {
                path: "/users",
                errorElement: <NotFound/>,
                children: [
                    {
                      path: "",
                      element: <Users />
                    },
                    {
                        path: ":id/",
                        element: <User />
                    }
                ]
            },
            {
                path: "/albums",
                errorElement: <NotFound />,
                children: [
                    {
                        path: "",
                        element: <Albums />
                    },
                    {
                        path: ":id/",
                        element: <Album />
                    }
                ]
            }
        ]
    }
])

function App() {


    return (
        <Provider store={store}>
            <RouterProvider router={router}>
            </RouterProvider>
        </Provider>
    )
}

export default App;
