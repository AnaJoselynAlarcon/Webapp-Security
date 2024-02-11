import React from "react";
import Logout from "./Logout";

function ChuckNorris({ token }) {
  const [fact, setFact] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const getFact = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch("http://localhost:3333/fact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      const fact = data.fact;

      setFact(fact);
    } catch (error) {
      console.error("Error fetching Chuck Norris fact:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    // Fetch fact when component is first mounted
    if (token) {
      getFact();
    }
  }, [token]); // Run the effect whenever token changes

  return (
    <>
      <h1>Fact</h1>
      {loading ? <div className="spinner"></div> : <p>{fact}</p>}
    </>
  );
}

export default ChuckNorris;
