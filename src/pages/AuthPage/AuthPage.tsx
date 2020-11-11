
import React from 'react';
import { Col, Row } from 'reactstrap';
import AuthForm from '../../components/Forms/AuthForm';
import { NavBarWithoutAuth } from '../../components/NavBar';

const Auth = () => {
    return (
        <>
            <NavBarWithoutAuth />
            <br />
            <Row>
                <Col md={{ offset: 3, size: 6 }}>
                    <AuthForm />
                </Col>
            </Row>
        </>
    );
}

export default Auth;
