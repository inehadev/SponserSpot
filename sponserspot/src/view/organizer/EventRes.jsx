import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import { EventContext } from "../../contexts/eventContext";


export const EventRes = ()=>{
    const {resPonsewithEventId} = useContext(EventContext);
    const [resData , setresData] = useState(null);
    const data = useParams();

    useEffect(()=>{
        const callFucn = async  ()=>{
            const res = await resPonsewithEventId(data.id);
            console.log("this is event id" , res);
            setresData(res);
        }

        callFucn();
    } , [])
    return (
        <div> Hello this is {data.id} </div>
    )
}