import { /*Link,*/ NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>
                <NavLink className="btn btn-outline-primary" to="/contacto">Contacto</NavLink>
                <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink>
            </div>
        </div>
    )
}