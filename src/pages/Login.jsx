
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { fire } from '../firebase';


const Login = () => {
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        const provider = new fire.auth.GoogleAuthProvider();
        try {
            const auth = await fire.auth().signInWithPopup(provider);
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