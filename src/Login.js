import { useState } from "react";
import { useNavigate } from "react-router-dom";
import globe from './icon.png';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const validCredentials = {
            username: "naval.ravikant",
            password: "05111974",
        };

        if (username === validCredentials.username && password === validCredentials.password) {
            navigate("/booking");
        } else {
            setError("Wrong Credentials !");
            setUsername("");
            setPassword("");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">

            <div className="bg-black text-white flex flex-col justify-center items-center px-36 py-16 rounded-md ">
                <div className="flex gap-2 justify-center items-center mb-6">
                    <div>
                        <img className="h-6" src={globe} alt="" />
                    </div>
                    <h1 className="text-xl font-semibold">Almanack</h1>
                </div>                


                <div class="relative mb-6">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.575c0 .894-.32 1.76-.902 2.438-1.57 1.834-3.957 2.739-7.102 2.739-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.577a2.249 2.249 0 0 1 2.249-2.25h11.501Zm0 1.5H6.253a.749.749 0 0 0-.75.749v.577c0 .536.192 1.054.54 1.461 1.253 1.468 3.219 2.214 5.957 2.214s4.706-.746 5.962-2.214a2.25 2.25 0 0 0 .541-1.463v-.575a.749.749 0 0 0-.749-.75ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="#000000" /></svg>

                    </div>
                    <input type="text" id="input-group-1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        class="bg-white border text-black placeholder-black placeholder:font-semibold text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Username" />
                </div>
                <div class="relative mb-6">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.745 5a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 16.755V7.25A2.25 2.25 0 0 1 4.25 5h15.495Zm0 1.5H4.25a.75.75 0 0 0-.75.75v9.505c0 .414.336.75.75.75h15.495a.75.75 0 0 0 .75-.75V7.25a.75.75 0 0 0-.75-.75Zm-12.995 8h10.5a.75.75 0 0 1 .102 1.493L17.25 16H6.75a.75.75 0 0 1-.102-1.493l.102-.007h10.5-10.5ZM16.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5.995 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM6 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.995 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="#000000" /></svg>
                    </div>
                    <input type="password" id="input-group-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="bg-white border text-black placeholder-black placeholder:font-semibold text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Password" />
                </div>
                <button onClick={handleLogin} type="button" class="focus:outline-none font-semibold text-black bg-white focus:ring-4 focus:ring-green-300  rounded-lg text-sm px-[5.5rem] py-2.5 mb-2 ">Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}

            </div>

        </div>
    );
};

export default Login;
