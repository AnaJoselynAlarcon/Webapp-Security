import React from 'react';

function Login({ onToken}) {
	const handleSubmit = async (e) => {
		e.preventDefault();

		const username = e.target.username.value;
		const password = e.target.password.value;

		// See Word document for code example.
		// Call performLogin function with username and password.
		performLogin(username, password);

		// Token needs to be sent to parent App component.
	}

	const performLogin = async (username, password) => {
		const response = await fetch('http://localhost:3333/login', {
			method: 'post',
			headers: {
				// Required for ExpressJS to parse body
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username, password })
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
		}
	};
	
	


	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 5 }}>
					<label htmlFor='username'>Username: </label>
					<input id='username' name='username' type='text' />
				</div>

				<div style={{ marginBottom: 5 }}>
					<label htmlFor='password'>Password: </label>
					<input id='password' name='password' type='password' />
				</div>

				<button type='submit'>Login</button>
			</form>
		</>
	);
}

export default Login;
