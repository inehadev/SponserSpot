import { useContext, useEffect, useState } from "react"
import NavBar from "../../components/Navbar"

import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext";


export const Organizersponsor = () =>{

    const navigate = useNavigate();
     const { registerforSponsor } = useContext(AuthContext);

    const [events , setevents] = useState([]);

    useEffect(()=>{
        const handleData = async()=>{
            const data = await getAllEvents();
            console.log(data);
            setevents(data);

        }


        handleData();

    } , [])
    return (
        <>
        <div className="min-h-screen w-full bg-zinc-950" >
           <NavBar/>
           <div className="h-[500px] w-full  object-contain bg-center flex justify-between px-4">
            <div className="flex flex-col justify-center  ml-36">
                <h1 className="text-7xl text-zinc-200 font-bold mt-1">Solving problems</h1>
                <h1 className="text-7xl text-zinc-200 font-bold mt-1">with unique and </h1>
                <h1 className="text-7xl text-pink-400 font-bold mt-1">Creative Design</h1>
                <p className="text-zinc-500 mr-64 mt-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae possimus quaerat expedita, nisi est Lorem ipsum dolor sit amet consectetur adipisicing elit. At, commodi..</p>
                <div>
                    <div className="h-12 w-48 mt-3 bg-pink-500 rounded-md flex justify-center items-center text-white font-semibold">
                        <p>Connect with sponsors</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex justify-center ">
                {/* <img className="mr-[20px]" src="/" alt="" /> */}
            </div>

           </div>
             </div>

             <div className="w-full bg-zinc-950 px-40">
                      
                <div className="pb-16" >
                <h1 className="text-2xl text-zinc-200 font-semibold" >Explore Categoreis</h1>
                <p className="text-zinc-500">Get all of your sponser</p>

                <div className="flex w-full mt-10 gap-4 flex-wrap">
                    <div className="h-40 w-52 bg-zinc-900 rounded-md bg-opacity-35 px-4 py-4 flex justify-between flex-col">
                       <div> <h1 className="text-zinc-400 text-2xl">01</h1></div>
                       <div>
                       <h1 className="text-pink-400 text-2xl">Technical</h1>
                       <p className="text-[10px] text-zinc-300">Lorem ipsum dolor sit  uam fugit consequatur eaque?! </p>
                       </div>

                    </div>
                    <div className="h-40 w-52 bg-zinc-900 rounded-md bg-opacity-35 px-4 py-4 flex justify-between flex-col">
                       <div> <h1 className="text-zinc-400 text-2xl">02</h1></div>
                       <div>
                       <h1 className="text-pink-400 text-2xl">Education</h1>
                       <p className="text-[10px] text-zinc-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio </p>
                       </div>

                    </div>
                    <div className="h-40 w-52 bg-zinc-900 rounded-md bg-opacity-35 px-4 py-4 flex justify-between flex-col">
                       <div> <h1 className="text-zinc-400 text-2xl">03</h1></div>
                       <div>
                       <h1 className="text-pink-400 text-2xl">Corporate</h1>
                       <p className="text-[10px] text-zinc-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio </p>
                       </div>

                    </div>
                    <div className="h-40 w-52 bg-zinc-900 rounded-md bg-opacity-35 px-4 py-4 flex justify-between flex-col">
                       <div> <h1 className="text-zinc-400 text-2xl">04</h1></div>

                       <div>
                       <h1 className="text-pink-400 text-2xl">Financial</h1>
                       <p className="text-[10px] text-zinc-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio </p>
                       </div>

                    </div>
                    <div className="h-40 w-52 bg-zinc-900 rounded-md bg-opacity-35 px-4 py-4 flex justify-between flex-col">
                       <div> <h1 className="text-zinc-400 text-2xl">05</h1></div>
                       <div>
                       <h1 className="text-pink-400 text-2xl">Financial</h1>
                       <p className="text-[10px] text-zinc-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio </p>
                       </div>

                    </div>
                   
                    
                </div>
                </div>


                <h1 className="text-2xl text-zinc-200 font-semibold" >Explore Sponser</h1>
                <p className="text-zinc-500">Get all of your events annd sponser them</p>

                <div className="min-h-[300px]  bg-zinc-700 bg-opacity-20 rounded-md flex flex-col items-center   py-4 px-4">
                    <div className="flex gap-10 items-center ">
                                <div className="h-[200px] w-[250px] bg-white rounded-md flex-col items-center mt-4 bg-center" >
                                    <img className="h-[200px] w-250px] object-cover rounded-md  " src='/logo1.jpg' alt="poster" />
                                      <h1 className="text-pink-300 mt-2 font-semibold ml-5 text-lg" >PokiSoeki</h1>
                                      <h5 className="text-white mt-2 ml-5 font-semibold text-lg" >Company Logo</h5>
                              <h5 className="text-white mt-2 ml-5 font-semibold text-lg" >Company Details</h5>
                                </div>
                                
                               

                              <div className="w-[250px]" >
                            
                           
                              <div className="h-[200px] w-[250px] bg-white rounded-md  mt-28   flex bg-center" >
                                    <img className="h-[200px] w-250px] object-cover rounded-md " src='/microsoft.avif' alt="poster" />
                                </div>
                              <div className="w-[250px]" >
                              <h1 className="text-pink-300 mt-2 ml-5 font-semibold text-lg" >microsoft</h1>
                              <h5 className="text-white mt-2 ml-5 font-semibold text-lg" >Company Logo</h5>
                              <h5 className="text-white mt-2 ml-5 font-semibold text-lg" >Company Details</h5>

                              </div>
                              </div>

                              <div>  
                              <div className="h-[200px] w-[250px] bg-white rounded-md  mt-28 flex bg-center" >
                                    <img className="h-[200px] w-250px] object-cover rounded-md " src='/addidas.png' alt="poster" />
                                </div>
                              <div className="w-[250px]" >
                              <h1 className="text-pink-300 mt-2 ml-5 font-semibold text-lg" >adidas</h1>
                              <h5 className="text-white mt-2 ml-5 font-semibold text-lg" >Company Logo</h5>
                              <h5 className="text-white mt-2 ml-5 font-semibold text-lg" >Company Details</h5>
                             
                           

























































                           
                              <p></p>

                              </div>
                              </div>   
                              </div>

                         

                            
                              </div>

             </div>

             </>
    )
}