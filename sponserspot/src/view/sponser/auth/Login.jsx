import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginPageForSponser (){
    const {loginForSponser} = useContext(AuthContext);
     const navigate = useNavigate();
    const [email , setemail] = useState('');
    const [password , setpassowrd] = useState('');


    const handleLogin = async (e)=>{
        e.preventDefault();
        await loginForSponser(email , password)
        navigate('/organizer/dashboard');
        
    }


    return(

        <div className="min-h-screen w-full bg-zinc-950">
        <div className="flex" >
            {/* image section for login page */}
            <div className="min-h-screen w-[650px]" >
                <div className="" >
                <img  className=" min-h-screen w-[650px] bg-transparent rounded-md  ml-8"  src="/sponsorRegister-.png"></img>
                </div>
            </div>


            {/* login form */}
        <div className="min-h-screen w-1/2 flex flex-col justify-center items-center mx-12 " >
            <h1 className="text-4xl text-purple-400 font-semibold" >SponsorSpot  </h1>
            <p className="mt-1 font-normal text-zinc-500" >Please fill the required information</p>

    <div>
        <form onSubmit={handleLogin} className="flex flex-col mt-6 " >

        <div className=" flex flex-col gap-4">
           
          

            
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


            <button className="w-full bg-purple-600 h-10 rounded-lg text-white" type="submit"> Login</button>
          <div className="w-full flex items-center justify-center">
          <p className="text-zinc-300">Don't have an account? <span className="text-purple-500" ><a href="/sponser/register">Register</a></span> </p>
          </div>
           

         
         
            
        </div>

        
        
        </form>
    </div>
        </div>

        </div>
    </div>

    )
}