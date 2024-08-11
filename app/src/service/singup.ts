import { toast } from "sonner";
import { api } from "./axios"

export const singup = async (name: string, email: string, password: string) => {
    try {
        await api.post('/users/createUser', {
            name,
            email,
            password,
        });
        toast.success('User created with success.')
        return true;
    } catch (e) {
        if (name == '') {
            toast.error("Name it's necessary.")
        } if (email == '') {
            toast.error("Email it's necessary.")
        } if (password == '') {
            toast.error("Password it's necessary.")
        }
        return false;
    }
};