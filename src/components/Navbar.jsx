import {Link, useNavigate, useLocation} from 'react-router-dom';

export default function Navbar({token, onLogout}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    const location = useLocation();
    const currentPath = location.pathname;

    const handleNav = (path) => navigate(path);

    return (
        <nav className="navbar flex justify-between">
            <Link to="/" className="nav-link font-[Bitcount_Prop_Double] text-xl flex">
                <img src="./controller.svg" alt="logo" className='w-5 mx-2' /> My Gaming List
            </Link>
            {!token ? (
                <>
                    <div className='fles gap-2'>
                        {currentPath != '/login' && (
                            <button onClick={handleNav('/login')} className="nav-link focus:outline-none text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">Login</button>
                        )}
                        {currentPath != '/signup' && (
                            <button onClick={handleNav('/signup')} className="nav-link focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign up</button>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div className='flex gap-2'>
                        <button onClick={handleNav('/profile')} className="nav-link focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">Profile</button>
                        <button onClick={handleLogout} className="nav-link focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">Logout</button>
                    </div>
                </>   
            )}
        </nav>
    );
}