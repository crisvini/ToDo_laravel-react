import { Link, NavLink } from "react-router-dom"

const Navbar = ({ redirect, redirectName }) => {
    return (
        // <nav className="custom-navbar d-flex justify-content-between align-items-center py-2 px-3">
        //     <div>
        //         <Link to='/'>ToDo</Link>
        //     </div>
        //     <div>
        //         <Link className="button-1" to={redirect}>{redirectName}</Link>
        //     </div>
        // </nav>
        <nav className="background-7 nav">
            <div className="nav-links">
                <div>
                    <Link to="/" className="text-5 bold fs-2 logo">ToDo&nbsp;<i className="bi bi-card-checklist"></i></Link>
                </div>
            </div>
            <div>
                <Link to="/list" className="button-1 text-decoration-none"><i className="bi bi-list-task"></i>&nbsp;See table</Link>
            </div>
        </nav >
    )
}

export default Navbar
