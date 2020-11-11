
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../types/app';
import NavBarWithAuth from './NavBarWithAuth';
import NavBarWithoutAuth from './NavBarWithoutAuth';

const mapProps = (state: RootState) => ({
    isAuth: state.auth.isAuth
});

interface NavBarBaseProps {
    isAuth: boolean
}

const NavBarBase: React.FC<NavBarBaseProps> = (props) => {
    if (props.isAuth) return <NavBarWithAuth />

    return <NavBarWithoutAuth />
};

const NavBar = connect(mapProps)(NavBarBase);

export default NavBar;
