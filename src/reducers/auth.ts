
import { Action, createReducer } from '@reduxjs/toolkit'
import { AuthState } from '../types/app';
import { ActionAuthSetSession } from '../types/state';
import { authTypes } from '../actions/actionTypes';

const defaultState: AuthState = {
    isAuth: false,
    profile: null
};

const auth = createReducer(defaultState, {
    [authTypes.setSession]: function(state, action: ActionAuthSetSession) {
        state.profile = action.payload;
        state.isAuth = true;
    },
    [authTypes.logout]: function(state, action: Action) {
        state.profile = null;
        state.isAuth = false;
    }
});

export default auth;
