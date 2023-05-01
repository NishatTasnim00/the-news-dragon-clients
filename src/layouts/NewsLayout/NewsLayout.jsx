import React from 'react';
import Header from '../../pages/shared/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../pages/shared/Footer';
import { Outlet } from 'react-router-dom';
import RightNav from '../../pages/shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
			<div>
				<Header></Header>
				<Container>
					<Row>
							<Col lg={9}>
								<Outlet />
							</Col>
						
						<Col lg={3}>
							<RightNav />
						</Col>
					</Row>
				</Container>
				<Footer></Footer>
			</div>
		);
};

export default NewsLayout;