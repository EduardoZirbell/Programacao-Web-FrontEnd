import { api } from "./axios"

export const singup = async (name: string, email: string, password: string) => {
    try {
        await api.post('/users/createUser', {
            name,
            email,
            password,
        });
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
};