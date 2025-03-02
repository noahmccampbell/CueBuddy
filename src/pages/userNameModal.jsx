import React, { useState, useEffect, use } from "react";
import Modal from "react-modal";
import { db, auth } from "../firebase";
import { setUser } from "../redux/store";
import {collection, setDoc , doc} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
Modal.setAppElement("#root");

const UsernameModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const handleSaveUsername = async () => {
        const user = auth.currentUser;
        if(user && username) {
            await setDoc(doc(db, "users", user.uid), {
                username: username
            }, {merge: true});
            dispatch(setUser({
                username: username
            }));
        }
        onClose();
    }
    
    return(
        <Modal className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"isOpen={isOpen} onRequestClose={onClose} contentLabel="Enter Username">
            <div className="font-quicksand w-[%50] h-[%50] bg-white text-black">
                <h2 className="text-2xl font-semibold p-2">Choose a Username</h2>
                <input className="mx-2 px-1 border-2 border-black" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username..."/>
                <button className="border-2 border-black bg-black text-white px-1 rounded-md hover:bg-white hover:text-black"onClick={handleSaveUsername}>Save</button>
            </div>
            
        </Modal>
    )
}



export default UsernameModal;