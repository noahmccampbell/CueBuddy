
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { auth, provider} from "../firebase";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/store';

import { signInWithPopup } from "firebase/auth";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleSignIn = async () => {
        try {
            const auth = await signInWithPopup(auth, provider);
            dispatch(setUser({
                uid: auth.user.uid
            }));
            navigate('/landing');
             // Redirect to dashboard after successful login
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    };
    

    return (
        <div className="flex items-center">
            <h1>Login</h1>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
    
};

export default Login;