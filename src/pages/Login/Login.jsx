import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
	const { logIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || '/category/0';
	console.log(from);

	const handleLogIn = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.mail.value;
		const password = form.password.value;
		console.log(email, password);
		logIn(email, password)
		
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
			})
			.catch((error) => console.log(error.message));
		navigate(from);
	};
	return (
		<Container className="w-25 mx-auto">
			<h3>Please Login</h3>
			<Form onSubmit={handleLogIn}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="mail"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
				<br />
				<Form.Text className="text-secondary">
					Don't Have an Account? <Link to="/register">Register</Link>
				</Form.Text>
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="text-danger"></Form.Text>
			</Form>
		</Container>
	);
};

export default Login;
