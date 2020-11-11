
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage';
import ProfilePage from '../../pages/ProfilePage';

const RouterWithAuth = () => {
    return (
        <Switch>
            <Route path='/admin' component={AdminPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/' exact component={() => <Redirect to='/admin' />} />
        </Switch>
    );
}

export default RouterWithAuth;
