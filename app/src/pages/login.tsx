import { useState } from "react";
import { login } from "../service/login";
import { Input } from "../component/input";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const logged = await login(email, password);
    if(logged){
      return navigate('/home');
    }
  };

  const inputs = [
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
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
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
        </div>
      </div>
    </>
  );
}
