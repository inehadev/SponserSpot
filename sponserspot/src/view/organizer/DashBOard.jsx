import NavBar from "../../components/Navbar"
import { OrgNav } from "./OrgNav"
import {Link} from 'react-router-dom'


export const DashBOard = ()=>{
    return (
       <div className="w-full min-h-screen bg-zinc-900" >
         <OrgNav/>
         <div className="w-full h-full flex items-center justify-center " >
            <div className="text-white flex justify-center items-center flex-col gap-3 mt-24">
            <h1 className="text-4xl font-semibold ">Upgrade your Events</h1>
            <h1 className="text-4xl font-semibold ">With the SponserSpot and help to</h1>
            <h1 className="text-4xl font-semibold text-purple-400 ">and upskill events</h1>
            <p className="mx-80 text-center text-zinc-500" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit rem ex. A dolorem porro numquam quasi? Pariatur reiciendis iste id commodi natus ipsa sit?</p>
            <div className="flex gap-3 mt-2 ">
                <button className="text-white bg-purple-700 px-4 py-2 rounded"  ><a href="/organizer/create"> Create Event</a></button>
                <button className=" border-[1px] border-purple-400 text-purple-400 px-4 py-2 rounded" ><Link to = '/sponser/events'>Explore Responses</Link></button>
            </div>
            </div>
        </div>
       </div>

    )
}