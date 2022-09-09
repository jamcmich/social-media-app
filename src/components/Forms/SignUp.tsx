import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

import { firebaseAuth, firebaseCreateUserWithEmailAndPassword } from "../../../firebase/authentication";
import AmicusLogo from "../../public/amicus-logo.svg";
import RegisterIllustration from "../../public/register-illustration.svg";
import styles from "./SignUp.module.css";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (event: any) => {
        event.preventDefault();

        await firebaseCreateUserWithEmailAndPassword(firebaseAuth, email, password, username);
    };

    return (
        <div className={styles.flexContainer}>
            <div className={styles.leftColumn}>
                <div className={styles.logoContainer}>
                    <Image src={AmicusLogo} alt="amicus logo"/>
                    <h1>Amicus</h1>
                </div>

                <div className={styles.illustrationContainer}>
                    <Image
                        src={RegisterIllustration}
                        alt="illustration of people networking"
                        layout="responsive"/>
                </div>

                <div className={styles.headingContainer}>
                    <h2>Discover your network.</h2>
                    <p>Join the world&apos;s largest online platform and become a part of the community!</p>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <h1>Sign Up</h1>
                <p>Already have an account? <span>Log in</span></p>

                <form className={styles.fieldsContainer} onSubmit={handleSignUp}>
                    <div className={styles.reverseElements}>
                        <input
                            id="usernameField"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                            value={username}
                            type="username"
                            placeholder="Create a username"
                            required
                        />
                        <label>Username</label>
                    </div>

                    <div className={styles.reverseElements}>
                        <input
                            id="emailField"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                            value={email}
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        <label>Email</label>
                    </div>

                    <div className={styles.reverseElements}>
                        <input
                            id="passwordField"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                            value={password}
                            type="password"
                            placeholder="Create a password"
                            required
                        />
                        <label>Password</label>
                    </div>

                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default SignUp;