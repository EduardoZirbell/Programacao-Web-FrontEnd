import { redirect } from "react-router-dom";
import { api } from "./axios"

export const singup = async (name: string, email: string, password: string) => {
    try {
        await api.post('/users/createUser', {
            name,
            email,
            password,
        });
        redirect('/users/login')
    } catch (e) {
        console.log(e)
    };
};