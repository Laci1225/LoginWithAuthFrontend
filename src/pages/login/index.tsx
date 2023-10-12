import {useEffect, useState} from "react";
import {httpRequest} from "@/api/common";
import {log} from "util";
import Link from "next/link";
import {Router, useRouter} from "next/router";

export default function Login() {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    useEffect(() => {
        //httpRequest.get<User[]>("users").then(value => setUsers(value.data))
    }, []);

    const [loginData, setLoginData] = useState("")
    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault()
        const user = {login, password};
        try {
            await httpRequest.post('/login', JSON.stringify(user))
                .then(value => setLoginData(value.data))
            loginData === login ?
                router.push({
                    pathname: `/${login}`,
                    query: {name: login}
                })
                //window.location.href = `${login}/data`;
                :
                console.log(loginData)//window.location.href = '/login'
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="form">
                <form method="POST" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className="input-box">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="text" name="login" placeholder="Login" required value={login}
                               onChange={(event) => setLogin(event.target.value)}/>
                    </div>
                    <div className="input-box">
                        <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                        <input type="password" name="password" placeholder="Password"
                               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                               required value={password}
                               onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="input-box">
                        <input type="submit" name="Login" value="Login"/>
                    </div>
                    <a href="/register">Navigate to Register</a>
                </form>
            </div>
        </div>
    )
}