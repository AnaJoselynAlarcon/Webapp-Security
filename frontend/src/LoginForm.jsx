import React from "react";

function Login({ onToken }) {
  const [error, setError] = React.useState("");

  const validateForm = (username, password) => {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if (!emailPattern.test(username)) {
      setError("Username must be a valid email.");
      return false;
    }

    if (!password || password.trim() === "") {
      setError("Password cannot be null.");
      return false;
    }

    if (username.length < 4) {
      setError("Username must be at least 4 characters long.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    // If all validations pass
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    // Validate username and password
    if (!validateForm(username, password)) {
      return;
    }
    // See Word document for code example.
    // Call performLogin function with username and password.
    performLogin(username, password);
  };

  const performLogin = async (username, password) => {
    const response = await fetch("http://localhost:3333/login", {
      method: "post",
      headers: {
        // Required for ExpressJS to parse body
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok && data.uuid) {
      // Authenticated

      const token = data.uuid;

      // Send token to parent App component.
      onToken(token);
    } else {
      // Authentication failed

      const message = data.message;

      // Display message to user.
      setError(message);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 5 }}>
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" type="text" />
        </div>

        <div style={{ marginBottom: 5 }}>
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" />
        </div>

        <button type="submit">Login</button>
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
}

export default Login;
