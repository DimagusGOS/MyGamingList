import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Results from './pages/Results';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Results />} />
      <Route path="/games/:id" element={<Results />} />
    </Routes>
  );
}

export default App
