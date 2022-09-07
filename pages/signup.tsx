import { NextPage } from "next";
import { useState } from "react";
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
            <form onSubmit={handleSignUp}>
                <label>Email</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type="email"
                    placeholder={"Email"}
                />
            </form>
        </div>
    );
};

export default SignUpPage;