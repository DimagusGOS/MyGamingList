import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Searchform() {
    const [gameName, setGameName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results?gameName=${gameName}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Game:
                <input type="text" value={gameName} onChange={(e) => {setGameName(e.target.value)}} />
            </label>
            <button type='submit'>Search Game</button>
        </form>
    );
}