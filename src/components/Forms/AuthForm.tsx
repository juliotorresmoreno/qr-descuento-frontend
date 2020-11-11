
import React, { useState } from 'react';
import { Button, Container, Input, Form, FormGroup } from 'reactstrap';
import authService from '../../services/authService';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const AuthFormBase: React.FC<RouteComponentProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        await authService.login({ email, password });
        props.history.push('/admin');
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
                <Button block primary type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

const AuthForm = withRouter(AuthFormBase);

export default AuthForm;
