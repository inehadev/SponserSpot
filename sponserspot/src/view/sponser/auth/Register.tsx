import React, { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPageForSponser = ()=> {
    const{registerforSponser} = useContext(AuthContext);

    const[organizationName , setOrganizationName] = useState("");
    const [CompanyName , setCompanyName] = useState("");
    const [logo , setlogo]=useState("");
    const[location , setlocation] = useState("");
    const [email , setemail]=useState("");
    const[password,setpassowrd]=useState("");
    const[address,setaddress]=useState("");
    const navigate = useNavigate();

    const handleLogin = async (e)=>{
        e.preventDefault();
        await registerforSponser(email , organizationName , CompanyName , logo , location , password ,address);
    }
    
    return (
        <div className="min-h-screen w-full bg-zinc-950">
            <div className="flex" >
                
                <div className="min-h-screen w-[650px] " >
                    <div className=" " >
                    <img  className=" min-h-screen w-[650px] bg-transparent rounded-md  ml-8"  src="/sponsorRegister-.png"></img>
                    </div>
                </div>


                {/* register form */}
            <div className="min-h-screen w-1/2 flex flex-col justify-center items-center mx-12 " >
                <h1 className="text-4xl text-purple-400 font-semibold" >SponsorSpot</h1>
                <p className="mt-1 font-normal text-zinc-500" >Please fill the required information</p>

        <div>
            <form onSubmit={handleLogin } className="flex flex-col mt-6 " >

            <div className=" flex flex-col gap-4">
               
                <div className="flex items-center gap-2 rounded-sm">
                    <div className="h-10 w-10 bg-zinc-800 rounded-md flex justify-center items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-white font-thin">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <input className="w-[400px] h-10 text-zinc-500 px-2 rounded-md   bg-zinc-800 border-[1px] border-zinc-700 " type="text " placeholder="Organization name" onChange
                ={(e)=>{
                    setOrganizationName(e.target.value)
                }}></input>
                </div>

                <div className="flex items-center gap-2 rounded-sm">
                    <div className="h-10 w-10 bg-zinc-800 rounded-md flex justify-center items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5  text-white h-5 font-thin">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>

                </div>
                <input className="w-[400px] h-10 px-2 text-zinc-500 rounded-md bg-zinc-800 border-[1px] border-zinc-700 " type="text " placeholder="CompanyName" onChange={(e)=>{
                    setCompanyName(e.target.value)
                }}></input>
                </div>
              
                <div className="flex items-center gap-2 rounded-sm">
                    <div className="h-10 w-10 bg-zinc-800 rounded-md flex justify-center items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-white font-thin">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
                </div>
                <input className="w-[400px] h-10 px-2 text-zinc-500 rounded-md bg-zinc-800 border-[1px] border-zinc-700 " type="file " placeholder="CompanyLogo" onChange={(e)=>{
                    setlogo(e.target.value)
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 text-white font-thin  h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                </div>
                <input className="w-[400px] h-10 px-2 rounded-md bg-zinc-800 text-zinc-500 border-[1px] border-zinc-700 " type="text " placeholder="Address" onChange={(e)=>{
                    setaddress(e.target.value)
                }}></input>
                </div>

                <button  className="w-full bg-purple-600 h-10 rounded-lg text-white" type="submit" > <Link to ='/sponser/login'>Register</Link> </button>
               
          <div className="w-full flex items-center justify-center">
          <p className="text-zinc-300">Already have an account? <span className="text-purple-500" ><a href="/sponser/login">Login</a></span> </p>
          </div>

             
             
                
            </div>

            
            
            </form>
        </div>
            </div>

            </div>
        </div>
    )
}