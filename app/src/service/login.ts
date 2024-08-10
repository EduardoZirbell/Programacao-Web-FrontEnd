import { api } from "./axios"

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/users/login', {
            email,
            password,
        });
        localStorage.setItem('token_key', response.data.token)
    } catch (e) {
        console.log(e)
    };
};