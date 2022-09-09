import { firebaseApp } from "./firebase";
import {
    getAuth,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

const firebaseAuth = getAuth(firebaseApp);

const getUserStatus = (user: any) => {
    if (user) {
        console.log(`Display name: ${user.displayName}`);
        console.log(`Email: ${user.email}`);
        console.log(`UID: ${user.uid}`);
        console.log(`Anonymous: ${user.isAnonymous}`);
    } else {
        console.log("User is not yet initialized.");
    }
};

const firebaseCreateUserWithEmailAndPassword = async (firebaseAuth: any, email: any, password: any, username: any) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

        // Registered
        const user = await userCredential.user;

        // ...
        await updateProfile(user, {
            displayName: username,
        });
        console.log("Your account has been registered!");
        await getUserStatus(user);
    } catch (error: any) {
        switch (error.code) {
            case "auth/email-already-in-use":
                console.log(`This email address is already taken.`);
                break;
            default:
                console.log(error);
                break;
        }

        // ..
        console.log("Your account could not be registered, please try again.");
    }
};

const firebaseSignInWithEmailAndPassword = (firebaseAuth: any, email: any, password: any) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential: UserCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Your account has been signed in!");
            console.log(getUserStatus(user));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Your account could not be signed in, please try again.");
        });
};

export { firebaseAuth, firebaseCreateUserWithEmailAndPassword, firebaseSignInWithEmailAndPassword };