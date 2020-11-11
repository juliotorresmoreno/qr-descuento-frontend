import { Action } from "@reduxjs/toolkit";
import { Profile } from "./models";

export interface RootState {
    auth: AuthState
}

export interface AuthState {
    isAuth: boolean
    profile: null | Profile
}

export interface ActionAuthSetSession extends Action {
    payload: Profile
};