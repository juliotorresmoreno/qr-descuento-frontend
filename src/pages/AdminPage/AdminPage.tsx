
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Campaign from '../../components/Campaign';
import Menu from '../../components/Menu';
import { MenuOption } from '../../components/Menu';
import { NavBarWithAuth } from '../../components/NavBar';

const AdminPage = () => {
    const [page, setPage] = useState(0);
    const onAction = (page: number) => () => {
        setPage(page);
    }
    const options: Array<MenuOption> = [
        {
            id: '1',
            text: "Campañas",
            action: onAction(0)
        },
        {
            id: '2',
            text: "Usuarios",
            action: onAction(1)
        }
    ]
    return (
        <>
            <NavBarWithAuth />
            <br />
            <Container>
                <Row>
                    <Col md={{ size: 3 }}>
                        <Menu options={options} />
                    </Col>
                    <Col md={{ size: 9 }}>
                        {page === 0 && <Campaign />}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminPage;
