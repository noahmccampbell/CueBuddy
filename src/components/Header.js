import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth";
import "../App.css";

const googleSignIn = async () => {
    
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).catch((error) => {
            console.error("Trouble signing in:", error);
    });
    
    
}
const signOut = () => {
   auth.signOut();
}

export {googleSignIn, signOut};

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    const [user] = useAuthState(auth);

    

    return (
        <header className = "flex justify-between px-5 py-2 bg-black text-white fixed w-full font-inconsolata border-b-2 border-accentBlue shadow-md z-10">
            <a href="/" className="logo text-2xl font-quicksand font-bold text-white">
                the web.
            </a>

            <nav className="hidden md:block">
                <ul className="flex justify-center">
                    <li>
                        <a href="/#about">Home</a>
                    </li>
                    <li>
                        <a href="/#about">Account</a>
                    </li>
                    <li>
                        <a href="/#contact">Web</a>
                    </li>
                    <li>
                        {user ? ( 
                            <button onClick={signOut} className="sign-out font-bol py-0 m-0" type="button">
                                Sign Out
                            </button>
                        ) : (
                            <button onClick={googleSignIn} type="button" className="sign-in px-2 py-0 m-0 font-bold">
                                Sign In
                            </button>
                        )}
                    </li>

                </ul>
            </nav>
            <nav className={!toggle ? "mobile-nav left-[-50%] w-[50%] z-0" : "mobile-nav left-[0%] w-[50%] z-0"}>
                <ul className="flex flex-col">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#acount">Account</a>
                </li>
                <li>
                    <a href="/#account">Web</a>
                </li>
                <li className=""> 
                    {user ? ( 
                        <button onClick={signOut} className="sign-out px-2 font-bold" type="button">
                            Sign Out
                        </button>
                    ) : (
                        <button onClick={googleSignIn} type="button" className="sign-in px-2 font-bold">
                            Sign In
                        </button>
                    )}
                </li>
                </ul>
            </nav>
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/> }
            </button>
        </header>
    )
}

export default Header;