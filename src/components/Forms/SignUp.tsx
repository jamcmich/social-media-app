import React, { ChangeEvent, useState } from "react";
import { firebaseAuth, firebaseCreateUserWithEmailAndPassword } from "../../../firebase/authentication";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (event: any) => {
        event.preventDefault();

        await firebaseCreateUserWithEmailAndPassword(firebaseAuth, email, password, username);
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <p>Already have an account?</p>
                <p>Log in</p>
            </div>
            <form onSubmit={handleSignUp}>
                <label>Username</label>
                <input
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                    value={username}
                    type="username"
                    placeholder="Username"
                    required
                />
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

export default SignUp;