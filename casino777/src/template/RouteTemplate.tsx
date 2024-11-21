import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";


export default function RouteTemplate() {

    return (
        <main>
            <Header/>
            <Outlet/>
        </main>
    )
}