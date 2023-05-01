import React, { useContext, useState } from 'react';
import logo from '../../../src/assets/logo.png';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const Header = () => {
	const {user}  = useContext(AuthContext)
	return (
		<Container>
			<div className="text-center">
				<img src={logo} alt="" />
				<p className="text-secondary">
					<small>Journalism Without Fear or Favour</small>
				</p>
				<p>{moment().format('dddd, MMMM D, YYYY')}</p>
			</div>
			<div className="d-flex" bg="light">
				<Button variant="danger">Latest</Button>
				<Marquee>
					I can be a React component, multiple React components, or just some
					text.
				</Marquee>
			</div>
			
		</Container>
	);
};

export default Header;
