import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg1.png'

const RightNav = () => {
    return (
			<>
				<div>
					<h4>Login</h4>
					<Button variant="outline-primary">
						{' '}
						<FaGoogle />
						Login with Google
					</Button>
					<Button variant="outline-secondary">
						<FaGithub />
						Login with Github
					</Button>
				</div>
				<div>
					<h4>Find us on</h4>
					<ListGroup>
						<ListGroup.Item><FaFacebook />facebook</ListGroup.Item>
						<ListGroup.Item><FaTwitter />twitter</ListGroup.Item>
						<ListGroup.Item>< FaInstagram/>instagram</ListGroup.Item>
					</ListGroup>
				</div>
                <QZone></QZone>
                <div>
                    <img src={bg} alt="" />
                </div>
			</>
		);
};

export default RightNav;