import {Link, useNavigate, useLocation} from 'react-router-dom';

export default function Navbar({token, onLogout}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="navbar flex justify-between">
            <Link to="/" className="nav-link font-[Bitcount_Prop_Double] text-xl">My Gaming List</Link>
            {!token ? (
                <>
                    <div>
                        {currentPath != '/login' && (
                            <Link to="/login" className="nav-link focus:outline-none text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">Login</Link> 
                        )}
                        {currentPath != '/signup' && (
                            <Link to="/signup" className="nav-link focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign up</Link>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <Link to="/profile" className="nav-link">Profile</Link>
                        <button onClick={handleLogout} className="nav-button">Logout</button>
                    </div>
                </>   
            )}
        </nav>
    );
}