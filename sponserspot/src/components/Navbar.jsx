import React from "react";


export default function NavBar () {
    return (
        <>
        <div className="h-24 w-full bg-transparent flex items-center justify-between px-24">
            {/* logog */}
            <div>
                <h1 className="text-2xl font-semibold text-white" >SponserSpot</h1>
            </div>


            {/* main nav */}
            <div className="flex justify-center items-center gap-4 text-white" >
                <p>Home</p>
                <p>Events</p>
                <p>Sponsere</p>
            </div>


            {/* buttons for login */}
            <div className="flex gap-4" >
                <button className="bg-white px-4 py-2 rounded-md text-md font-normal text-zinc-900 hover:bg-transparent hover:text-white" >Register </button>
                <button className="px-4 py-2 border-[1px] border-zinc-400 rounded-md text-white hover:bg-white hover:text-zinc-800 " >Login</button>
            </div>

        </div>
        </>
    )
}