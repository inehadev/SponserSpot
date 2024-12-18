import { createContext } from "react";
import axios from "axios";

const EventContext = createContext();

const EventProvider = ({children})=>{

    const createEvent = async(eventName, eventDetail, eventType, fees, domain, audience, poster,ppt, phone, startDate, endDate,url) => {

        const token = localStorage.getItem('x-auth-token');
            try{

            const bodyparameter = ({
                eventName: eventName,
                eventDetail : eventDetail,
                eventType : eventType,
                fees : fees,
                domain:domain,
                audience : audience,
                poster : poster,
                ppt:ppt,
                phone:phone,
                startDate : startDate,
                endDate : endDate,
                url:url,
            })

            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                    'x-auth-token':token
                }
            }

            const res = await axios.post("http://localhost:2000/events/create" , bodyparameter , axiosheader);
            console.log(res.data); 

    }

    catch(error){
        console.log(error)
    }
}


const getAllEvents = async () =>{
    try {
        console.log("this is working");
        const token = localStorage.getItem('x-auth-token');

        const axiosheader = {
            headers:{
                "Accept":"application/json",
                'x-auth-token':token
            }
        }
        const res = await axios.get("http://localhost:2000/events" , axiosheader );
        console.log(res.data);
        return res.data;

        
    } catch (error) {
        console.log(error);
    }
}


    const getEventWithId = async (eventId)=>{
        try {
            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                }
            }
            const res = await axios.get("http://localhost:2000/events/"+eventId , axiosheader );
            return res.data;

        } catch (error) {
            console.log(error);
        }
    }


    const postResponse = async  (event , message)=>{
        try {

            const token = localStorage.getItem('x-auth-token');

            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                    "x-auth-token":token
                }
            }
            const bodyParameter = {
                message:message,
                event:event
            }

            const res = await axios.post("http://localhost:2000/events/response/" , bodyParameter , axiosheader);
            console.log(res.data);
            alert("event Submitted");
            
        } catch (error) {
            console.log(error);
        }
    }


    const getEventUser = async ()=>{
       try {
        const token = localStorage.getItem('x-auth-token');
        console.log(token);
        const axiosheader = {
            headers:{
                "Accept":"application/json",
                "x-auth-token":token
            }
        }

        const res = await axios.get("http://localhost:2000/organizer/events" , axiosheader);
        console.log(res.data);
        return res.data;
       } catch (error) {
        console.log(error);
       }

    
       


    }



    const resPonsewithEventId = async (eventId)=>{
        try {
            const token = localStorage.getItem('x-auth-token');
            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                    "x-auth-token":token
                }
            }

            const res = await axios.get("http://localhost:2000/response/"+eventId , axiosheader);
            return res.data;
        } catch (error) {
            console.log(error);
        }

    }

return (
 <EventContext.Provider value={{createEvent , getAllEvents , getEventWithId , postResponse , getEventUser , resPonsewithEventId}} >
    {children}
    </EventContext.Provider>
)

}

export {EventContext , EventProvider};



