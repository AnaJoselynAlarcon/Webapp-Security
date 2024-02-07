import React from 'react';

function Logout({ }) {
	const handleLogout = async (e) => {
		e.preventDefault();

		// Send request to /logout API endpoint


		// Call onLogout with API message as input.

		// Parent App component needs to notified that logout has occurred.
	};

	const performLogout = async () => {
		// app.post('/logout', (req, res) => {
		// 	const token = req.header('Authorization').replace('Bearer ', '');
	
		// 	delete sessions[token];
	
		// 	res.status(200);
		// 	res.json({ message: 'You have been logged out.' });
		// });
		
	}

	return (
		<>
			<button onClick={handleLogout}>
				Logout
			</button>
		</>
	);
}

export default Logout;
