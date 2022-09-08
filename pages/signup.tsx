import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import {
    firebaseAuth,
    firebaseCreateUserWithEmailAndPassword,
} from "../firebase/authentication";

const SignUpPage: NextPage<any> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (event: any) => {
        event.preventDefault();

        firebaseCreateUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    return (
        <div>
            <h1>Sign Up Page</h1>
            <p>Sign Up</p>
            <form onSubmit={handleSignUp}>
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
        </div>
    );
};

export default SignUpPage;