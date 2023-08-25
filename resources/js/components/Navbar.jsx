import { Link, NavLink } from "react-router-dom"

const Navbar = ({ redirect, redirectName }) => {
    return (
        <nav className="background-7 nav">
            <div className="nav-links">
                <div>
                    <Link to="/" className="text-5 bold fs-2 logo">ToDo&nbsp;<i className="bi bi-card-checklist"></i></Link>
                </div>
            </div>
            <div>
                <Link to={redirect} className="button-1 text-decoration-none fs-08"><i className="bi bi-list-task"></i>&nbsp;{redirectName}</Link>
            </div>
        </nav >
    )
}

export default Navbar
