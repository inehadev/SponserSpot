import React, { useContext, useState } from "react";
import { EventContext } from "../../contexts/eventContext";
import { UploadImageOnCloudinary } from "../../../utils/cloudinary";
import axios from "axios";


export default function CreateEventPage () {
    const{createEvent}=useContext(EventContext)
    const[image , setimage]=useState(null);
    const[name , setname]=useState('');
    const[detail , setdetail]=useState('');
    const[fees , setfees]=useState('');
    const[startDate , setstartDate]=useState('');
    const[endData , setEndDate]=useState('');
    const[domain , setDomain]=useState('');
    const[audience , setaudience]=useState('');
    const[mobile , setmobile]=useState('');
    const[ppt , setppt]=useState('');
    const[url , seturl]=useState('');
    const[eventType , seteventType]=useState('free');

   
    const handleEvent = async () =>{
        const imageUrl = await UploadImageOnCloudinary(image);
        const PptUrl = await UploadImageOnCloudinary(ppt);

    
     
      const eventRes = await createEvent(name,
        detail,
        eventType,
        fees,
        domain,
        audience,
        imageUrl,
        PptUrl,
        mobile,
        startDate,
        endData,
        url,
);


    

    }


    const submitimage = (e)=>{
        e.preventDefault();
        const data = new FormData()
        console.log("all good ")
        data.append("file" , image)
        data.append("upload_preset" , "imagepreset")
        data.append("cloud_name" ,"drd0h8ihm")
         console.log("working")
        fetch("https://api.cloudinary.com/v1_1/drd0h8ihm/image/upload" , ({
            method:"post",
            body:data
        })).then((res)=>res.json())
        // console.log("fine")
        .then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="bg-zinc-950 min-h-screen flex flex-col justify-start items-start w-full pb-14 " >
            
            <div className="h-24 w-full bg-zinc-800 flex justify-center px-32 flex-col " >
                <h1 className="text-3xl font-bold text-gray-100" >Create Event</h1>
                <p className="text-zinc-300 mt-1" >Please fill up the required information</p>
            </div>

            <div className="px-32" >
                <div className="flex mt-6 gap-6">
                    <input className="w-[350px] h-10 rounded-md bg-zinc-800 text-white px-3 bg-opacity-55 placeholder:text-zinc-400" type="text" placeholder="Event Name" onChange={(e)=>{
                       setname(e.target.value)
                    }} />
                    <input className="w-[350px] h-10 rounded-md bg-zinc-800 text-white px-3 bg-opacity-55 placeholder:text-zinc-400" type="text" placeholder="Start Date: 5 jan 2021" onChange={(e)=>{
                     setstartDate(e.target.value)
                    }} />
                    <input className="w-[350px] h-10 rounded-md bg-zinc-800 text-white px-3 bg-opacity-55 placeholder:text-zinc-400" type="text" placeholder="End Date: 7 sep 2021" onChange={(e)=>{
                       setEndDate(e.target.value)
                    }} />
                </div>

                <div className="flex gap-6 mt-10" >
                    <textarea className="bg-zinc-800 bg-opacity-55 outline-none rounded-md px-4 py-4" name="" id="" cols="70" rows="10" placeholder="Explain your event details and benifits and event procedure" onChange={(e)=>{
                        setdetail(e.target.value)
                    }} ></textarea>
                    <div onClick={()=>{
                        document.querySelector(".poster").click();
                    }} className="h-50 w-[500px] bg-zinc-800 bg-opacity-55 rounded-md flex flex-col justify-center items-center " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-zinc-300">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

                <p className="text-zinc-300 text-xl">Image</p>
                <p className="text-zinc-600" >  Please select image from your system</p>
                <div className=" mt-4 bg-purple-300 flex items-center justify-center px-2 py-2 rounded-md ">
                    <p>Choose image</p>
</div>

                    </div>

                </div>


                <div className="flex mt-6 gap-6">
                <select onChange={(e)=>{
                    setDomain(e.target.value)
                }} className="w-[350px] rounded-md h-10 bg-zinc-800 bg-opacity-55 text-zinc-400 px-4" >
                      <option className="bg-zinc-800 text-zinc-700"  value="Technical">Technical</option>
                     <option value="Sports">Sports</option>
                        <option value="Academic">Academic </option>
                        <option value="Non-Tech">Non technical </option>
                        <option value="Esports">E Sports </option>
                        <option value="Hackathon">Hackathon </option>

    </select>
                    <input className="w-[350px] h-10 rounded-md bg-zinc-800 text-white px-3 bg-opacity-55 placeholder:text-zinc-400" type="text" placeholder="Expected Number of audience" onChange={(e)=>{
                        setaudience(e.target.value)
                    }} />
                    <input className="w-[350px] h-10 rounded-md bg-zinc-800 text-white px-3 bg-opacity-55 placeholder:text-zinc-400" type="text" placeholder="Mobile" onChange={(e)=>{
                       setmobile(e.target.value)
                    }} />
                </div>
                
                <div className="flex mt-6 gap-6">
                <div className="flex gap-6 " >
                    <div onClick={()=>{
                        document.querySelector(".ppt").click();
                    }} className="h-52 w-[1100px] bg-zinc-800 bg-opacity-55 rounded-md flex flex-col justify-center items-center " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-zinc-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
                <p className="text-zinc-300 text-xl">Sponser presentation</p>
                <p className="text-zinc-600" >  Please select sponser ppt</p>
                <div className=" mt-4 bg-purple-300 flex items-center justify-center px-2 py-2 rounded-md ">
                    <p>Choose presentation</p>
</div>

                    </div>

                </div>


                </div>
                <div className="flex mt-6 gap-6">
                <select onChange={(val)=>{
                    seteventType(val.target.value);
                }} className="w-[350px] rounded-md h-10 bg-zinc-800 bg-opacity-55 text-zinc-400 px-4" >
                     <option value="free">Free</option>
                        <option value="paid">Paid 🚀</option>
                        

    </select>
                    <input className="w-[350px] h-10 rounded-md bg-zinc-800 text-white px-3 bg-opacity-55 placeholder:text-zinc-400" type="text" placeholder="https://event.com" onChange={(e)=>{

                    }} />
                   {
                    eventType=="paid" ?  <input className="w-[350px] h-10 rounded-md bg-zinc-800 text-white px-3 bg-opacity-55 placeholder:text-zinc-400" type="text" placeholder="Event Amount" onChange={(e)=>{
                        setfees(e.target.value)
                    }} /> : <div></div>
                   }
                </div>

                <div onClick={()=>{
                    handleEvent();
                }} className="w-[1100px] h-12 bg-purple-300 mt-10 rounded-md flex justify-center items-center">
                    <p className="text-zinc-900 font-semibold">Register Event</p>
                </div>
                <input hidden onChange={(e)=>{
                    setppt(e.target.files)
                }} className="ppt" type="file" />
                <input onChange={(e)=>{
                    setimage(e.target.files)
                }} hidden className="poster" type="file" />
            </div>
</div>
    )
}





 {/* <div className="flex justify-between items-center mt-6">
                {/* <div className="">
                  */}