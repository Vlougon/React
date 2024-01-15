import { Outlet } from "react-router-dom";
import '../styles/Layout.css';

export default function Layout() {
    return (
        <div className="container">
            <Outlet>

            </Outlet>
            <footer>Footer</footer>
        </div>
    )
}