import React, { useState } from "react";

export default function CreateEventPage () {
    const[image , setimage]=useState('');

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
        <div className="bg-mainPage min-h-screen flex justify-start items-start "  >
            
            <div className="px-16 py-4 w-full">
             <div >
                    <h1 className="text-white font-semibold text-2xl" >Create Events</h1>
                    <p className="text-zinc-500 mt-1">Fill the require information for event creation</p>
                </div>
                <form onSubmit={submitimage} className=" w-full flex flex-col mt-10">
                <div className="flex justify-between" >
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7  " type="text" placeholder="Event Name" />
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7" type="text" placeholder="Event Domain" />
                </div>
                {/* <div className="flex justify-between items-center mt-6">
                {/* <div className="">
                  <select className="w-[600px] rounded-full h-12 bg-zinc-800 px-4" >
                      <option  value="Easy">Easy🍀</option>
                     <option value="Medium">Medium💡</option>
                        <option value="Hard">Hard 🚀</option>
    </select>*/}
   

                       <div className="flex justify-between mt-7" >
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7  " type="date" placeholder="Start Date" />
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7" type="date" placeholder="End Date" />
                </div>

                <div className="flex justify-between mt-7" >
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7  " type="text" placeholder="Event Type" />
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7" type="text" placeholder="Event Domain" />
                </div>

                <div className="flex justify-between mt-7" >
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7  " type="text" placeholder="Type of audience" />
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7" type="file" placeholder="PPt" onChange={(e)=>{
                        setimage(e.target.files[0])
                    }} />
                </div>

                <div className="flex justify-between mt-7" >
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7  " type="number" placeholder="fees" />
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7" type="file" placeholder="Poster" onChange={(e)=>{
                        setimage(e.target.files[0])
                    }} />
                </div>

                <div className="flex justify-between mt-7" > 
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7   " type="tel" 
                      placeholder="Phone No" />
                    <input className="h-12 w-[600px] text-white rounded-full bg-zinc-800 placeholder:text-zinc-500 placeholder:pl-7" type="text" placeholder="Event Discription" />
                </div>

                <button className="w-full bg-purple-600 h-10 rounded-lg text-white" type="submit" >createEvent</button>
                

                </form>
            </div>
        </div>
    )
}