import React from "react";

function Logout({ token }) {
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      // Send request to /logout API endpoint
      const response = await fetch("http://localhost:3333/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Logout;
