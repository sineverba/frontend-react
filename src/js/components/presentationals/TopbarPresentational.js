import { Link } from 'react-router-dom';

const logout = () => {
    //TODO
    return;
}

export const TopbarPresentational = () => {
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                    <Link to="#" className="nav-link dropdown-toggle" onClick={logout}>
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">LOGOUT</span>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default TopbarPresentational;