import { toast } from "sonner";
import { api } from "./axios"
const token = localStorage.getItem('token_key')?.valueOf()

export const createStudent = async (name: string, phone: string) => {
    try {
        await api.post('/students/createStudent', {
            name,
            phone
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        toast.success('Student created.')
        return true;
    } catch (e) {
        if (name == '') {
            toast.error("Name it's necessary")
        } else {
            toast.error("Phone it's necessary.")
        }

        return false;
    }
};

export const listStudents = async () => {
    try {
        const response = await api.get('/students/listStudents');
        return response;
    } catch (e) {
        console.log(e)
    }
};