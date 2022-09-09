import { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import {
    firebaseAuth,
    firebaseSignInWithEmailAndPassword,
} from "../../firebase/authentication";

const LoginPage: NextPage<any> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: any) => {
        event.preventDefault();

        firebaseSignInWithEmailAndPassword(firebaseAuth, email, password);
    };

    return (
        <div>
            <h1>Login Page</h1>
            <p>Login</p>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                />
                <label>Password</label>
                <input
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                />
                <input type="submit"/>
            </form>
            <p><Link href="/src/pages/register">Sign Up</Link></p>
        </div>
    );
};

export default LoginPage;