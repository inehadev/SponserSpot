import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/Navbar'
import axios from 'axios';

const AlllSponser = () => {
    const [sponserData , setsponserData] = useState(null);

    useEffect(()=>{
        const getResponses =  async()=>{
            const res = await axios.get("http://localhost:2000/get-sponser");
            if(res){
                console.log("Data Got", res);
                setsponserData(res.data);
            }else{
                console.log(res);
            }
        }
        getResponses();
    } , [])
  return (
    <div className='h-screen w-full px-28 bg-stone-950' >
        <NavBar/>
        {/* upper card for the sponsors */}
        <div className='h-[250px] w-full flex items-center justify-center flex-col bg-gradient-to-br from-stone-900 to-stone-950 rounded-xl' >
            <h1 className='text-4xl font-medium text-pink-400'  >Explore Sponsors</h1>
            <p className='text-sm font-medium text-zinc-400 mt-4 text-balance text-center tracking-wider leading-relaxed' >Explore all the sponsors out there , and reach them out <br /> to get sponsores for your upcoming events</p>
        </div>

        {/* all the cards will be shown here */}
        <div className='h-screen w-full ' >
            <h1 className='text-lg font-medium text-zinc-400 mt-8' >Explore Sponsers</h1>
        </div>
    </div>  
  )
}

export default AlllSponser
