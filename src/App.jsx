import './App.css';
import {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home';
import Results from './pages/Results';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import GameDetail from './pages/GameDetail';


function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [message, setMessage] = useState('');

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setMessage('Logged in successfully');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setMessage('Logged out');
  };

  return (
    <>
      <Navbar token={token} onLogout={handleLogout} />

      <Routes>
        <Route path='/signup' element={<Signup onAuth={handleLogin} setMessage={setMessage} />} />
        <Route path='/login' element={<Login onAuth={handleLogin} setMessage={setMessage} />} />
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Results />} />
        <Route path="/games/:id" element={token ? <GameDetail token={token} /> : <Navigate to="/login" />} />
        <Route path="/profile" element={token ? <Profile token={token} /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App
