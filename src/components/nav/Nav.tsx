import './style.css';

const Nav = () => {
    return (
        <aside className='nav-aside'>
            <header>
                <img className="nav-logo" src="assets/img/kv-logo.png" alt="Logo" />
            </header>
            <nav>
                <div className="nav-icon-label">
                    <div className="nav-icon">
                        <img src="assets/icons/employees.svg" alt="employee logo" />
                    </div>
                    <p className="nav-label-title">Employee List</p>
                </div>
            </nav>
        </aside>
    );
};

export default Nav;
