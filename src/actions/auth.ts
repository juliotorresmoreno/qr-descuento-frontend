import { createAction } from "@reduxjs/toolkit";
import { Profile } from "../types/app";
import { authTypes } from "./actionTypes";

export const setSession = createAction<Profile>(authTypes.setSession);

