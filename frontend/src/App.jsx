import React, { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import ChuckNorris from "./ChuckNorris";
import Logout from "./Logout";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="app">
      {token ? (
        <>
          <ChuckNorris token={token} />
          <Logout token={token} setToken={setToken} />
        </>
      ) : (
        <LoginForm onToken={setToken} />
      )}
    </div>
  );
}

export default App;
