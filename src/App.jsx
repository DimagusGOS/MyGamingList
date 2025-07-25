import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Results from './pages/Results';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/results' element={<Results />} />
    </Routes>
  );
}

export default App
