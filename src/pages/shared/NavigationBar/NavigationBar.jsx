import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut}  = useContext(AuthContext)

	const handleSignOut =() =>{
		logOut()
		.then()
		.catch(error=>console.log(error.message))
	}
	return (
		<Container>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="m-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="#action2">about</Nav.Link>
							<Nav.Link href="#">Career</Nav.Link>
						</Nav>

						<div className="d-flex">
							{user && (
								<Nav.Link href="#">
									<FaUserCircle style={{ fontSize: '2rem', color: 'gray' }} />{' '}
									<small>{}</small>
								</Nav.Link>
							)}

							{user ? (
								<Button variant="dark" onClick={handleSignOut}>Log Out</Button>
							) : (
								<Link to="/login">
									<Button variant="dark">Log In</Button>
								</Link>
							)}
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
