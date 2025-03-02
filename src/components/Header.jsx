import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import "../App.css";
import { useSelector } from "react-redux";
import { FaFireAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
/*
const googleSignIn = async () => {
    
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).catch((error) => {
            console.error("Trouble signing in:", error);
    });
    
    
}
const signOut = () => {
   auth.signOut();
}
*/
//export {googleSignIn, signOut};

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    return (
        <header className="flex justify-between px-5 py-2 nav-background text-black fixed w-full font-inconsolata border-b-2 border-darkAccentBlue shadow-md z-10">
            <a href="http://localhost:5173/" className="logo text-2xl font-quicksand font-bold text-darkAccentBlue">
                CueBuddy
            </a>
            {user.username !== '' ? (<>
            <nav className="hidden md:block">
                <ul className="flex justify-center items-center gap-5 p-0 m-0">
                    <li>
                        <button className="text-lg
                        font-bold" onClick={() => navigate("/landing")}>Home</button>
                    </li>
                    <li className="flex items-center gap-1">
                        <FaFireAlt size={20}/>
                        <p>Streak: {user.streak}</p>
                    </li>
                    <li>
                        <p>Level: {user.level}</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <p className="text-lg font-bold text-darkAccentBlue">{user.username}</p>
                        <SlArrowDown className="m-0 p-0"size={12}/>
                    </li>
                </ul>
            </nav>
            <nav className={!toggle ? "mobile-nav left-[-50%] w-[50%] z-0" : "mobile-nav left-[0%] w-[50%] z-0"}>
                <ul className="flex flex-col">
                    <li>
                        <a href="http://localhost:5174/landing">Home</a>
                    </li>
                    <li>
                        <a href="http://localhost:5174/landing">Lessons</a>
                    </li>
                
                </ul>
            </nav>
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
            </>) : (
                <></>
            )}   
        </header>
    );
}

export default Header;