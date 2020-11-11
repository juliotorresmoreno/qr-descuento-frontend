
import { Profile } from "../types/app";
import { setSession } from "../actions/auth";
import store from "../store";

interface Credentials {
    email: string;
    password: string;
}
const authService = {
    async login(credentials: Credentials) {
        const profile: Profile = {
            cellphone: '',
            email: '',
            name: '',
            lastname: ''
        };
        store.dispatch(setSession(profile));
    }
}

export default authService;
