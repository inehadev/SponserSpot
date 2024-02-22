import React, { useContext, useState } from "react"
import { AuthContext } from "../../contexts/authContext";
export const RegisterPageForOrganizer = ()=> {
   const{RegisterForOrganizer} = useContext(AuthContext);

    const[username,setusername] =useState("");
    const [email , setemail]=useState("");
    const[password,setpassowrd]=useState("");
    const[avtar,setavtar]=useState("");

    const handleRegister = async (e)=>{
        e.preventDefault();
        await RegisterForOrganizer(username , email , password , avtar);
    }
    
    return (
        <div className="min-h-screen w-full bg-zinc-950">
            <div className="flex" >
                {/* image section for register page */}
                <div className="min-h-screen w-[650px] bg-zinc-800" >
                    <div className=" bg-white mx-4 my-4" ></div>
                </div>


                {/* register form */}
            <div className="min-h-screen w-1/2 flex flex-col justify-center items-center mx-12 " >
                <h1 className="text-4xl text-purple-400 font-semibold" >SponserSpot</h1>
                <p className="mt-1 font-normal text-zinc-500" >Please fill the required information</p>

        <div>
            <form onSubmit={handleRegister} className="flex flex-col mt-6 " >

            <div className=" flex flex-col gap-4">
               
                <div className="flex items-center gap-2 rounded-sm">
                    <div className="h-10 w-10 bg-zinc-800 rounded-md flex justify-center items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-4 text-white font-thin">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                </div>
                <input className="w-[400px] h-10 text-zinc-500 px-2 rounded-md   bg-zinc-800 border-[1px] border-zinc-700 " type="text " placeholder="user name" onChange
                ={(e)=>{
                    setusername(e.target.value)
                }}></input>
                </div>


                <div className="flex items-center gap-2 rounded-sm">
                    <div className="h-10 w-10 bg-zinc-800 rounded-md flex justify-center items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 text-white h-5 font-thin">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                </div>
                <input className="w-[400px] h-10 px-2 rounded-md text-zinc-500 bg-zinc-800 border-[1px] border-zinc-700 " type="email " placeholder="Email" onChange={(e)=>{
                    setemail(e.target.value)
                }}></input>
                </div>
                   

                <div className="flex items-center gap-2 rounded-sm">
                    <div className="h-10 w-10 bg-zinc-800 rounded-md flex justify-center items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 text-white h-5 font-thin">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                </div>
                <input className="w-[400px] h-10 px-2 rounded-md bg-zinc-800 text-zinc-500 border-[1px] border-zinc-700 " type="password " placeholder="Password" onChange={(e)=>{
                    setpassowrd(e.target.value)
                }}></input>
                </div>
                  
              
                <div className="flex items-center gap-2 rounded-sm">
                    <div className="h-10 w-10 bg-zinc-800 rounded-md flex justify-center items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

                </div>
                <input className="w-[400px] h-10 px-2 text-zinc-500 rounded-md bg-zinc-800 border-[1px] border-zinc-700 " type="file " placeholder="avatar" onChange={(e)=>{
                    setavtar(e.target.value)
                }}></input>
                </div>

                <button  className="w-full bg-purple-600 h-10 rounded-lg text-white" type="submit">Register</button>
          <div className="w-full flex items-center justify-center">
          <p className="text-zinc-300">Already have an account? <span className="text-purple-500" ><a href="/organizer/login">Login</a></span> </p>
          </div>

             
             
                
            </div>

            
            
            </form>
        </div>
            </div>

            </div>
        </div>
    )
}