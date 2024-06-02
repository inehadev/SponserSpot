import React from "react";
import SponserNav from "./SponserNav";


export default function   SponsorDas (){
    return(
        
        <div className="w-full min-h-screen bg-zinc-900" >
        <SponserNav/>
        <div className="w-full h-full flex items-center justify-center " >
            <div className="text-white flex justify-center items-center flex-col gap-3 mt-24">
            <h1 className="text-4xl font-semibold ">Unlock a realm of event</h1>
            <h1 className="text-4xl font-semibold "> possibilities, where sponsorship </h1>
            <h1 className="text-4xl font-semibold text-purple-400 ">meets seamless exploration</h1>
            <p className="mx-80 text-center text-zinc-500" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit rem ex. A dolorem porro numquam quasi? Pariatur reiciendis iste id commodi natus ipsa sit?</p>
            <div className="flex gap-3 mt-2 ">
                {/* <button className="text-white bg-purple-700 px-4 py-2 rounded"  ><a href="/sponser/register"> Create Event</a></button> */}
                <button className=" border-[1px] border-purple-400 text-purple-400 px-4 py-2 rounded" ><a href="organizer/sponsor">Explore Sponsors</a></button>
            </div>
            </div>
        </div>
        </div>
        
        

    )

}