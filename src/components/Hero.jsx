import React from "react";


const Hero = () => {

    return (
        <section className="flex justify-between grid grid-cols-1 text-white font-quicksand bg-gray-900 px-5 py-32 border-b-2 border-white">
            <div className="container m-auto text-center">
                <h1 className="text-4xl">Welcome to <br/> <span className="font-bold">CueBuddt</span><br/> A platform for understanding social cues.</h1>
                {!false ? (<p className="py-5"><button  className="px-2 py-1 mx-2 bg-white rounded-md hover:bg-transparent border-2 border-white text-black hover:text-white">Sign in</button>to join the CueBuddy.</p>
                    ) : (
                        <p className="py-5">Welcome back bro.<button className="px-2 py-1 mx-2 bg-white rounded-md hover:bg-transparent border-2 border-white text-black hover:text-white">Get Started</button> here.</p>
                    )
                }

            </div>
            <div className="container m-auto py-32 border-white">
                <h1 className="text-4xl">Understand social cues</h1>
                <p className="py-5">In <span className="font-bold ">CueBuddy</span> those who have trouble understanding socializing can become <span className="font-bold "> social cue masters.</span> </p>
            </div>
            <div className="container m-auto border-white">
                <h1 className="text-4xl">Somethigbn something</h1>
                <p className="py-5">blah blah blasgh</p>
            </div>
        </section>
        
    )
}

export default Hero;