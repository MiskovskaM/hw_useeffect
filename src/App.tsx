import React from 'react';
import JokeDisplay from './components/JokeDisplay';

const App: React.FC = () => {
    return (
        <div>
            <h1>Joke Generator</h1>
            <JokeDisplay />
        </div>
    );
};

export default App;
