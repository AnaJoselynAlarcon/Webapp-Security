import React from 'react';

import './App.css';
import Login from './Login';
import Fact from './Fact';
import Logout from './Logout';

function App() {
    const [token, setToken] = React.useState('');

    //define a function onToken
    function handleToken(token) {
        setToken(token);
    }
    

    return (
        <div className="app">
            {/* Display login form if token is not set. */}
            

            {/* Display fact and logout if token is set. */}
            {token ? <Fact token={token}/> : <Login onToken={handleToken} />}
        </div>
    );
}

export default App;
