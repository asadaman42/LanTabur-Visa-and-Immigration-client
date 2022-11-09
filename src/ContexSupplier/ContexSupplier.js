import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FireBase/FireBase.config';
import { useEffect } from 'react';

export const UniversalContext = createContext();
const auth = getAuth(app);

const ContexSupplier = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const githubLogInProvider = (provider) => {
        return signInWithPopup(auth, provider);
    };


    const googleLogInProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const emailLoginProvider = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    };


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const createUserByEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updatePhotoAndName = photoAndName => {
        updateProfile(auth.currentUser, photoAndName);
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (presentStudent) => {
            // if(presentStudent === null || presentStudent.emailVerified){
            //     setUser(presentStudent);
            // }
            setUser(presentStudent);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };

    }, []);



    const [mode, setmode] = useState("light");

    const toggleMode = () => {
        if (mode === "light") {
            setmode("dark");
            document.body.style.backgroundColor = "#050122"; //'#042743'

        }

        else {
            setmode("light");
            document.body.style.backgroundColor = "white";
        }
    };



    const contextInformation = {
        user,
        toggleMode,
        mode,
        googleLogInProvider,
        logOut,
        createUserByEmailAndPassword,
        emailLoginProvider,
        loading,
        setLoading,
        updatePhotoAndName,
        emailVerify,
        githubLogInProvider,
        setUser
    };

    return (
        <div>
            <UniversalContext.Provider value={contextInformation}>
                {children}
            </UniversalContext.Provider>
        </div>
    );
};

export default ContexSupplier;