import React, { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import ChuckNorris from "./ChuckNorris";

function App() {
  const [token, setToken] = useState("");

  // Function to handle logout
  function handleLogout() {
    // Clear the token
    setToken("");
  }

  return (
    <div className="app">
      {/* Display login form if token is not set. */}
      {/* Display fact, logout button, if token is set. */}
      {token ? (
        <>
          <ChuckNorris token={token} />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <LoginForm onToken={setToken} />
      )}
    </div>
  );
}

export default App;
