import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { singup } from "../service/singup";
import { Input } from "../component/input";

export function SingUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const created = await singup(name, email, password);
        if (created) {
            return navigate('/');
        }
    };

    const haveUser = async () => {
        return navigate('/')
    }

    const inputs = [
        {
            type: "text",
            label: "Name",
            placeholder: "",
            value: name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
            },
        },
        {
            type: "email",
            label: "Email",
            placeholder: "",
            value: email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
            },
        },
        {
            type: "password",
            label: "Senha",
            placeholder: "",
            value: password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
            },
        },
    ];
    return (
        <>
            <div className="h-svh flex items-center justify-center">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign up your account
                        </h2>
                    </div>

                    <div className="mt-10 py-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {inputs.map((input, index) => (
                            <Input key={index} {...input} />
                        ))}
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3.5 mt-5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Does have a user?{' '}
                        <a onClick={haveUser} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            SingIn
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}