mport React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {googleSignIn, signOut} from "./Header";
import { useUser } from "./UserInfoProv";

const Hero = () => {
    const [user] = useAuthState(auth);
    const { username, setUsername } = useUser();

    return (
        <section className="flex justify-between grid grid-cols-1 text-white font-quicksand bg-gray-900 px-5 py-32 border-b-2 border-white">
            <div className="container m-auto text-center">
                <h1 className="text-4xl">Welcome to <br/> <span className="font-bold">the web.</span><br/> a new kind of social media.</h1>
                {!user ? (<p className="py-5"><button onClick={googleSignIn} className="px-2 py-1 mx-2 bg-white rounded-md hover:bg-transparent border-2 border-white text-black hover:text-white">Sign in</button>to join the web today.</p>
                    ) : (
                        <p className="py-5">Welcome back {username}.<button className="px-2 py-1 mx-2 bg-white rounded-md hover:bg-transparent border-2 border-white text-black hover:text-white">Get Started</button> here.</p>
                    )
                }

            </div>
            <div className="container m-auto py-32 border-white">
                <h1 className="text-4xl">A path to exposure</h1>
                <p className="py-5">In <span className="font-bold ">the web</span> all posts are connected together via tags. Everyone has a certain amount of tag slots they can use per post or for their account. You can gain more tags by interacting with other posts and being an active member. Therefore <span className="font-bold ">the more tags you earn the more likely your posts are to be seen by others.</span> </p>
            </div>
            <div className="container m-auto border-white">
                <h1 className="text-4xl">No secret algorithm</h1>
                <p className="py-5">The only thing driving your feed is the tags connecting every single post, like a web. Nothing else. You drive your feed by what you want to see.</p>
            </div>
            <div className="container m-auto py-32 border-white">
                <h1 className="text-4xl">Straightforward as it gets</h1>
                <p className="py-5">Be involved and make yourself stand out within a community and feed you curate.</p>
            </div>
        </section>
        
    )
}

export default Hero;