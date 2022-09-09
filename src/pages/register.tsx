import { NextPage } from "next";

import SignUp from "../components/Forms/SignUp";
import styles from "../styles/register.module.css";

const Registration: NextPage<any> = () => {
    return (
        <div className={styles.container}>
            <SignUp/>
        </div>
    );
};

export default Registration;