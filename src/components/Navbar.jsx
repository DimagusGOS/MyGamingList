import {Link, useNavigate, useLocation} from 'react-router-dom';

export default function Navbar({token, onLogout}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    const location = useLocation();
    const currentPath = location.pathname;

    const baseBtnClasses = "inline-flex items-center justify-center focus:outline-none text-white font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2";

    return (
        <nav className="navbar flex justify-between">
            <Link to="/" className="nav-link font-[Bitcount_Prop_Double] text-xl flex items-center gap-2">
                <img src="./controller.svg" alt="logo" className='w-6 h-6' /> 
                <span className='whitespace-nowrap'>My Gaming List</span>
            </Link>
        <div className="flex gap-2">
            {!token ? (
                <>
                {currentPath !== '/login' && (
                    <Link
                    to="/login"
                    className={`${baseBtnClasses} bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900`}
                    >
                    Login
                    </Link>
                )}
                {currentPath !== '/signup' && (
                    <Link
                    to="/signup"
                    className={`${baseBtnClasses} bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
                    >
                    Sign up
                    </Link>
                )}
                </>
            ) : (
                <>
                <Link
                    to="/profile"
                    className={`${baseBtnClasses} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900`}
                >
                    Profile
                </Link>
                <button
                    onClick={handleLogout}
                    className={`${baseBtnClasses} bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900`}
                >
                    Logout
                </button>
                </>
            )}
        </div>

        </nav>
    );
}