import React from 'react';

function Fact({ token }) {
	const [fact, setFact] = React.useState('');

	// See Word document for code example on fetching a fact.
	const getFact = async () => {
		const response = await fetch('http://localhost:3333/fact', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	
		const data = await response.json();
		
		const fact = data.fact;
		
		// Store fact in state.
		setFact(fact);
	}
	
	// Fact will be fetched automatically when component is first mounted.
	React.useEffect(() => {
        // Fetch fact when component is first mounted
        if (token) {
            getFact();
        }
    }, [token]); // Run the effect whenever token changes

	return (
		<>
			<h1>Fact</h1>
			<p>{fact}</p>
		</>
	);
}

export default Fact;
