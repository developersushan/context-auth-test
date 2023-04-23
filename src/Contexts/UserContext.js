import React, { createContext, useEffect, useState } from 'react';
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading]=useState(true)
    //google provider and facebook provider and github provider
    const provider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInFrom =(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    const verify =()=>{
        return sendEmailVerification(auth.currentUser)
        .then(()=>{})
    }
    //send password reset email and password reset email
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    //googleProvider 
    const providerGoogle = ()=>{
        return signInWithPopup(auth,provider)

    }
    //facebookProvider
    const providerFacebook = ()=>{
        return signInWithPopup(auth,facebookProvider)
    }
    //githubProvider
    const providerGithub = ()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return (()=>{
            unSubscribe()
        })
    },[])
    const authInfo = {user,loading, createUser, signInFrom,verify ,resetPassword , providerGoogle ,providerFacebook ,providerGithub,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;