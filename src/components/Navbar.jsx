import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ token, onLogout }) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const sharedClasses =
        "inline-flex items-center justify-center focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    const handleNav = (path) => () => navigate(path);

    return (
        <nav className="navbar flex justify-between items-center px-4 py-2">
            <button
                onClick={handleNav('/')}
                className="nav-link font-[Bitcount_Prop_Double] text-xl flex items-center"
            >
                <img src="./controller.svg" alt="logo" className="w-5 mx-2" />
                My Gaming List
            </button>

            {!token ? (
                <div className="flex gap-2">
                    {currentPath !== '/login' && (
                        <button
                            onClick={handleNav('/login')}
                            className={`${sharedClasses} bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900`}
                        >
                            Login
                        </button>
                    )}
                    {currentPath !== '/signup' && (
                        <button
                            onClick={handleNav('/signup')}
                            className={`${sharedClasses} bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
                        >
                            Sign up
                        </button>
                    )}
                </div>
            ) : (
                <div className="flex gap-2">
                    <button
                        onClick={handleNav('/profile')}
                        className={`${sharedClasses} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900`}
                    >
                        Profile
                    </button>
                    <button
                        onClick={handleLogout}
                        className={`${sharedClasses} bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900`}
                    >
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
}
