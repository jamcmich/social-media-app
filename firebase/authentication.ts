import { firebaseApp } from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseAuth = getAuth(firebaseApp);

const getUserStatus = (user: any) => {
    if (user) {
        console.log(`Display name: ${user.displayName}`);
        console.log(`Email: ${user.email}`);
        console.log(`UID: ${user.uid}`);
        console.log(`Anonymous: ${user.isAnonymous}`);
    } else {
        console.log('User is not yet initialized.');
    }
}

const firebaseCreateUserWithEmailAndPassword = (firebaseAuth: any, email: any, password: any) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            // Registered
            const user = userCredential.user;
            console.log('Your account has been registered!');
            console.log(getUserStatus(user));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Your account could not be registered, please try again.');
            // ..
        });
};

const firebaseSignInWithEmailAndPassword = (firebaseAuth: any, email: any, password: any) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Your account has been signed in!');
            console.log(getUserStatus(user));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Your account could not be signed in, please try again.');
        });
};

export { firebaseAuth, firebaseCreateUserWithEmailAndPassword, firebaseSignInWithEmailAndPassword };