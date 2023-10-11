import {useEffect, useState} from "react";
import {httpRequest} from "@/api/common";

export default function Home() {
    const [login, setLogin] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    useEffect(() => {
        //httpRequest.get<User[]>("users").then(value => setUsers(value.data))
    }, []);

    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            Something
            {//users.map(user => user.name)}
            }
            <div className="form">
                <form method="post">
                    <h2>Register</h2>
                    <div className="input-box">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="text" name="login" placeholder="Login" required value={login}
                               onChange={(event) => setLogin(event.target.value)}/>
                    </div>
                    <div className="input-box">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="email" name="email" placeholder="Email" required value={email}
                               onChange={(event) => setEmail(event.target.value)}/>
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
                        <input type="button" name="Register" value="Register"
                               onClick={(event) => {
                                   event.preventDefault()
                                   const user = {login, password, email};
                                   httpRequest.post("/register",
                                       JSON.stringify(user)
                                   )
                                       .then(value => console.log(value.data))

                               }}/>
                    </div>
                    <a href="/login">Navigate to Login</a>
                </form>
            </div>
            {login} {email} {password}
        </div>
    )
}
