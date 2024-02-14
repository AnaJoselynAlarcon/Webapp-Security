import React from "react";

function ChuckNorris({ token }) {
  const [fact, setFact] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const getFact = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response = await fetch("http://localhost:3333/fact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        const fact = data.fact;

        setFact(fact);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching Chuck Norris fact:", error);
    }
  };

  React.useEffect(() => {
    if (token) {
      getFact();
    }
  }, [token]);

  const fetchAnotherFact = () => {
    setFact("");
    getFact();
  };

  const fontColor = "#000000";
  return (
    <>
      <h1>Fact</h1>
      {loading ? (
        <div className="spinner" />
      ) : (
        <p style={{ color: fontColor }}>{fact}</p>
      )}
      <button onClick={fetchAnotherFact}>Fetch Another Fact</button>
    </>
  );
}

export default ChuckNorris;
