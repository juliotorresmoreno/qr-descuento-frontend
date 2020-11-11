
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

interface FormProps {
    onSubmit: () => void
}

interface CrudMenuProps {
    active: any;
    form: React.ComponentClass<FormProps> | React.FC<FormProps>;
    onPrint?: () => void;
}

const CrudMenu: React.FC<CrudMenuProps> = ({ active, form: Form, onPrint }) => {
    const [showForm, setShowForm] = useState(false);
    const toggle = () => setShowForm(!showForm);
    return (
        <>
            <Button
                color='primary'
                onClick={toggle}>
                <i className="fas fa-plus-circle"></i>
            </Button>&nbsp;&nbsp;
            <Button
                color='success' disabled={!active}
                onClick={toggle} >
                <i className="fas fa-edit"></i>
            </Button>&nbsp;&nbsp;
            <Button
                color='danger' disabled={!active}
                onClick={toggle}>
                <i className="fas fa-trash-alt"></i>
            </Button>&nbsp;&nbsp;
            {onPrint && <Button
                color='secondary' disabled={!active}
                onClick={onPrint}>
                <i className="fas fa-print"></i>
            </Button>}

            <Modal isOpen={showForm} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form onSubmit={() => setShowForm(false)} />
                </ModalBody>
            </Modal>
        </>
    );
};

export default CrudMenu;
