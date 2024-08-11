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
        return true;
    } catch (e) {
        console.log(e)
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