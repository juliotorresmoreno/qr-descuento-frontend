
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../types/app';
import RouterWithAuth from './RouterWithAuth';
import RouterWithoutAuth from './RouterWithoutAuth';

const mapState = (state: RootState) => ({
    isAuth: state.auth.isAuth
});

interface RouterProps {
    isAuth: boolean
}

const RouterBase: React.FC<RouterProps> = ({ isAuth }) => {
    if (isAuth) return <RouterWithAuth />;
    return <RouterWithoutAuth />;
}

const Router = connect(mapState)(RouterBase);

export default Router;
