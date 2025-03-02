import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/store';
import { useState } from 'react';
import { db, fire } from '../firebase';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getDoc, doc} from "firebase/firestore";
import UsernameModal from './userNameModal';

import { signInWithPopup } from "firebase/auth";
const Login = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector(state => state.user.username);
    const [isAuthed, setAuthed] = useState(false);

    const handleGoogleSignIn = async () => {
        try {
            const auth = getAuth(fire);
            const provider = new GoogleAuthProvider();
            const login = await signInWithPopup(auth, provider);
            dispatch(setUser({
                uid: login.user.uid
            }));
            const userRef = doc(db, "users", login.user.uid);
            
            if(!(await getDoc(userRef)).exists() || username == '') {
                setIsModalOpen(true);
            } else {
                dispatch(setUser({
                    username: (await getDoc(userRef)).data().username,
                    level: (await getDoc(userRef)).data().level
                }));
                navigate('/landing');
            }
            

             // Redirect to dashboard after successful login
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    };
    

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/landing');
    }

    return (
        
        <div className="flex items-center">
            <UsernameModal isOpen={isModalOpen} onClose={closeModal} />
            <button onClick={handleGoogleSignIn}>{children}</button>
        </div>
    );
    
};

export default Login;