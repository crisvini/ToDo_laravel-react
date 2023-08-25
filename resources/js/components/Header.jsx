const Header = ({ title }) => {
    return (
        <header className="header">
            <span className="text-8 fs-3">Tasks - {title}</span>
            <button className="button-1 fs-08"><i className="bi bi-plus-circle"></i>&nbsp;New task</button>
        </header>
    )
}

export default Header
