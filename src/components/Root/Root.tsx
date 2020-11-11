
import React from 'react';
import Router from '../Router';
import store from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;
