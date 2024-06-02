import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { EventContext } from "../../contexts/eventContext";
import NavBar from "../../components/Navbar";


export const EventDetail = ()=>{

    const data = useParams();
    const {getEventWithId , postResponse} = useContext(EventContext);

    const [message , setmessage] = useState('Excited to support your event! As a sponsor, we believe in your cause and look forward to contributing to its success. Let us make a meaningful impact together!');

    const [eventData , seteventData] = useState(null);


  

    useEffect(()=>{
        const getingEvent = async () =>{
           const res = await getEventWithId(data.id);
           seteventData(res)
           console.log(res);
        }
        getingEvent();

    } , [])

    const handleRes = async ()=>{
        console.log("working");
        console.log(data.id, message);
        const res = await postResponse(data.id , message);
        console.log(res);
     

    }

    
    return (
        <div className="bg-zinc-950 min-h-screen w-full">
            <NavBar/>
            <div className="h-[500px] w-full px-11 flex items-center gap-10">
               
                    <img className="h-[400px] w-[600px] object-contain rounded-lg" src="/img7.jpg" alt="eventImage" />
                    <div className="h-[450px] w-1 bg-zinc-800"></div>
                    <div className="mt-15">
                        <h1 className="text-pink-400 text-3xl font-semibold">Sports Event</h1>
                        <p className="mr-16 text-zinc-500 mt-4">this event is sports event where all the athlete can take part in game…</p>

                        <div className="flex gap-2" >
                        <div className="bg-zinc-600 bg-opacity-15 w-28 py-1 rounded-full flex items-center justify-center mt-4">
                            <p className="text-white">Techinical</p>
                        </div>
                        <div className="bg-zinc-600 bg-opacity-15 w-28 py-1 rounded-full flex items-center justify-center mt-4">
                            <p className="text-white">Free</p>
                        </div>
                        </div>

                        <div className="flex gap-2 mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-pink-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <p className="text-zinc-400 font-semibold" >5-feb-2024 - 5-feb-2024</p>

                        </div>


                        <div className="flex gap-10" >
                            <div><div className="flex gap-2 mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

                    <p className="text-zinc-400 font-semibold" >1k</p>

                        </div></div>
                            <div><div className="flex gap-2 mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-400 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

                    <p className="text-zinc-400 font-semibold" >7418529635</p>

                        </div></div>
                        </div>
                        <div className="flex gap-10">
                        <div className="flex gap-3 mt-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <p className="text-indigo-400 font-semibold" >Visit Event Website</p>
                        </div>

                        <div className="flex gap-3 mt-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>

                        <p className="text-indigo-400 font-semibold" >Download sponsership presentation</p>
                        </div>
                        </div>

                        <div className="flex flex-col mt-4">
                            <textarea onChange={(e)=>{
                                setmessage(e.target.value)
                            }} className="bg-zinc-800 border-[1px] border-zinc-600 bg-opacity-30 rounded-lg px-2 py-2 placeholder:text-sm " id="" cols="10" rows="2" placeholder={message} ></textarea>
                            <div onClick={handleRes} className="w-full h-10 bg-white mt-3 rounded-lg flex justify-center items-center">
                                <p className="font-semibold">Connect With Organizer</p>
                            </div>
                            
                        </div>





                    </div>
                

            </div>

{/* 
            <div className="h-[500px] w-full px-11 flex items-center gap-10">
               
               <img className="h-[400px] w-[600px] object-contain rounded-lg" src="/culturalevents.avif" alt="eventImage" />
               <div className="h-[450px] w-1 bg-zinc-800"></div>
               <div className="mt-15">
                   <h1 className="text-pink-400 text-3xl font-semibold">Cultural Event</h1>
                   <p className="mr-16 text-zinc-500 mt-4">The technical event wiil be the more knowledgful events towards our te…</p>

                   <div className="flex gap-2" >
                   <div className="bg-zinc-600 bg-opacity-15 w-28 py-1 rounded-full flex items-center justify-center mt-4">
                       <p className="text-white">Cultural</p>
                   </div>
                   <div className="bg-zinc-600 bg-opacity-15 w-28 py-1 rounded-full flex items-center justify-center mt-4">
                       <p className="text-white">Free</p>
                   </div>
                   </div>

                   <div className="flex gap-2 mt-8">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-pink-400">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
               </svg>
               <p className="text-zinc-400 font-semibold" >12-feb-2024 - 14-feb-2024</p>

                   </div>


                   <div className="flex gap-10" >
                       <div><div className="flex gap-2 mt-8">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-400">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

               <p className="text-zinc-400 font-semibold" >2k</p>

                   </div></div>
                       <div><div className="flex gap-2 mt-8">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-400 ">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

               <p className="text-zinc-400 font-semibold" >8054789678</p>

                   </div></div>
                   </div>
                   <div className="flex gap-10">
                   <div className="flex gap-3 mt-4 cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-400">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                   </svg>
                   <p className="text-indigo-400 font-semibold" >Visit Event Website</p>
                   </div>

                   <div className="flex gap-3 mt-4 cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-400">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>

                   <p className="text-indigo-400 font-semibold" >Download sponsership presentation</p>
                   </div>
                   </div>

                   <div className="flex flex-col mt-4">
                       <textarea onChange={(e)=>{
                           setmessage(e.target.value)
                       }} className="bg-zinc-800 border-[1px] border-zinc-600 bg-opacity-30 rounded-lg px-2 py-2 placeholder:text-sm " id="" cols="10" rows="2" placeholder={message} ></textarea>
                       <div onClick={handleRes} className="w-full h-10 bg-white mt-3 rounded-lg flex justify-center items-center">
                           <p className="font-semibold">Connect With Organizer</p>
                       </div>
                       
                   </div>





               </div>
           

       </div>


       <div className="h-[500px] w-full px-11 flex items-center gap-10">
               
               <img className="h-[400px] w-[600px] object-contain rounded-lg" src="/technicalevents.jfif" alt="eventImage" />
               <div className="h-[450px] w-1 bg-zinc-800"></div>
               <div className="mt-15">
                   <h1 className="text-pink-400 text-3xl font-semibold">Technical Event</h1>
                   <p className="mr-16 text-zinc-500 mt-4">The technical event wiil be the more knowledgful events towards our te…</p>

                   <div className="flex gap-2" >
                   <div className="bg-zinc-600 bg-opacity-15 w-28 py-1 rounded-full flex items-center justify-center mt-4">
                       <p className="text-white">Techinical</p>
                   </div>
                   <div className="bg-zinc-600 bg-opacity-15 w-28 py-1 rounded-full flex items-center justify-center mt-4">
                       <p className="text-white">Free</p>
                   </div>
                   </div>

                   <div className="flex gap-2 mt-8">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-pink-400">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
               </svg>
               <p className="text-zinc-400 font-semibold" >30-jan-2024 - 1-feb-2024</p>

                   </div>


                   <div className="flex gap-10" >
                       <div><div className="flex gap-2 mt-8">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-400">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

               <p className="text-zinc-400 font-semibold" >1k</p>

                   </div></div>
                       <div><div className="flex gap-2 mt-8">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-400 ">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

               <p className="text-zinc-400 font-semibold" >8054789678</p>

                   </div></div>
                   </div>
                   <div className="flex gap-10">
                   <div className="flex gap-3 mt-4 cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-400">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                   </svg>
                   <p className="text-indigo-400 font-semibold" >Visit Event Website</p>
                   </div>

                   <div className="flex gap-3 mt-4 cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-400">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>

                   <p className="text-indigo-400 font-semibold" >Download sponsership presentation</p>
                   </div>
                   </div>

                   <div className="flex flex-col mt-4">
                       <textarea onChange={(e)=>{
                           setmessage(e.target.value)
                       }} className="bg-zinc-800 border-[1px] border-zinc-600 bg-opacity-30 rounded-lg px-2 py-2 placeholder:text-sm " id="" cols="10" rows="2" placeholder={message} ></textarea>
                       <div onClick={handleRes} className="w-full h-10 bg-white mt-3 rounded-lg flex justify-center items-center">
                           <p className="font-semibold">Connect With Organizer</p>
                       </div>
                       
                   </div>





               </div>
           

       </div>



       

 */}

        </div>
    )
}