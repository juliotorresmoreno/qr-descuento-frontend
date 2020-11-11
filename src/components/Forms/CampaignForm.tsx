
import React, { useState } from 'react';
import { Button, Container, Input, Form, FormGroup } from 'reactstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface CampaignFormBaseProps extends RouteComponentProps {
    onSubmit: () => void
}

const CampaignFormBase: React.FC<CampaignFormBaseProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        props.onSubmit();
    };
    return (
        <Container>
            <Form onSubmit={onSubmit} padder>
                <FormGroup>
                    <Input
                        value={email} nativeID="email"
                        onChangeText={setEmail} />
                </FormGroup>
                <FormGroup>
                    <Input
                        value={password} nativeID="password"
                        onChangeText={setPassword} />
                </FormGroup>

                <FormGroup>
                    <Button color='danger' type='submit'>
                        Cancel
                    </Button>&nbsp;&nbsp;
                    <Button color='primary' type='submit'>
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </Container>
    );
}

const CampaignForm = withRouter(CampaignFormBase);

export default CampaignForm;
