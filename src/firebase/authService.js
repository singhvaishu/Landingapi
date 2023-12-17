import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

let firebaseApp;


try {
    firebaseApp = initializeApp(firebaseConfig);
} catch (error) {
    if (!/already exists/.test(error.message)) {
        console.error('Firebase initialization error', error.stack);
    }

    firebaseApp = getApp();
}

const auth = getAuth(firebaseApp);


const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const signUpWithEmailAndPassword = async (email, password) => {
    try {

        if (!isValidEmail(email)) {
            throw new Error("Invalid email format");
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;

    } catch (error) {
        throw error;
    }
};

export const signInWithEmailAndPasswordAsync = async (email, password) => {
    try {

        if (!isValidEmail(email)) {
            throw new Error("Invalid email format");
        }

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const sendPasswordResetEmailAsync = async (email) => {
    try {

        if (!isValidEmail(email)) {
            throw new Error("Invalid email format");
        }

        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw error;
    }
};

export const signOutAsync = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
};
