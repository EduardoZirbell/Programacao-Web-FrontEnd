import { toast } from "sonner";
import { api } from "./axios"

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/users/login', {
            email,
            password,
        });
        localStorage.setItem('token_key', response.data.acessToken)
        toast.success('User logged with success.')
        return true;
    } catch (e) {
        if (email == '') {
            toast.error("Email it's necessary.")
        } if (password == '') {
            toast.error("Password it's necessary.")
        } if (email != '' && password != '') {
            toast.error('Invalid user or password.')
        }
        return false;
    }
};