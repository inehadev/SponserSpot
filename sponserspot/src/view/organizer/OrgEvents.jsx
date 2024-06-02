import { useContext, useEffect, useState } from "react"
import { OrgNav } from "./OrgNav"
import { EventContext } from "../../contexts/eventContext"
import { useNavigate } from "react-router-dom";



export const OrgEvents = ()=>{

    const {getEventUser} = useContext(EventContext);
    const [event , setevent] = useState([]);

    const navigation = useNavigate();

    useEffect(()=>{
        const handle = async () =>{
            const data = await getEventUser();
            setevent(data);
        }
        handle();
    } , [])
    return (
        <div className="min-h-screen w-full bg-zinc-900">
            <OrgNav/>

            <div className="w-full flex flex-col px-24 py-6">
                <h1 className="text-xl font-bold text-white" >Your Events</h1>
                <p className="text-zinc-400 mt-2" >Explore the events created by you and see responses</p>

                <div className="flex gap-2" >
               {
                sponsers.length < 1 ? <div> </div> :  <div className="flex gap-5 mt-4" > {
                    sponsers.map((curr)=>{
                        return <div onClick={()=>{
                            navigation(`/eventsorganizer//${curr._id}`)
                        }} className="min-h-[300px] w-[290px]  bg-zinc-700 bg-opacity-20 rounded-md flex flex-col  items-center py-4 px-4">
                            <div className="h-[200px] w-[250px] bg-white rounded-md  bg-center" >
                                <img className="h-[200px] w-250px] object-cover rounded-md " src="https://media.istockphoto.com/id/1037898710/vector/abstract-vector-dynamic-background-futuristic-poster-for-corporate-meeting-online-courses.jpg?s=612x612&w=0&k=20&c=mLvsRyYsYqsErlmgvICCtEJp8npQCc_Qz7Jk7psoMEw=" alt="poster" />
                            </div>
                          <div className="w-[250px]" >
                          <h1 className="text-pink-300 mt-4 font-semibold text-lg" >Technical</h1>
                          <p className="text-sm text-zinc-400 font-light mt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error dolor corrupti atque aliquid nemo?</p>
                          <p></p>
        
                          </div>
        
                        </div>
                    })} </div>
               }
                </div>


            </div>
        </div>
    )
}