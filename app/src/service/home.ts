import { api } from "./axios"
const token = localStorage.getItem('token_key')

export const createStudent = async (name: string, phone: string) => {
    try {
        await api.post('/students/createStudent', {
            name,
            phone
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {
        console.log(e)
    };
}

export const listStudents = async () => {
    try {
        const response = await api.get('/students/listStudents');
        return response;
    } catch (e) {
        console.log(e)
    };
};