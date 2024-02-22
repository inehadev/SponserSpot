import { createContext } from "react";
import axios from "axios";


const AuthContext = createContext();


const AuthProvider = ({children}) =>{


    const loginForSponser = async (email  , password ) => {
        try {

            const bodyPara = {
                email:email,
                password: password
            }
            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                }
            }

            const res = await axios.post("http://localhost:2000/sponser/login" , bodyPara , axiosheader);
            const token = localStorage.setItem('x-auth-token' , res.data.token);
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const registerforSponser = async(  name,logo,email,password, address, phone, coverimage) =>{
        try {
            const bodyPara = {
                name:name,
                logo:logo,
                email:email,
                password:password,
               address:address,
               phone:phone,
               coverimage:coverimage
            }
            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                }
            }

            const res = await axios.post("http://localhost:2000/sponser/register" , bodyPara , axiosheader);
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const RegisterForOrganizer = async(username,email, password, avatar)=>{
        try{
            
        const bodyparametr = ({
            username:username ,
            email:email,
            password:password,
            avatar:avatar
        })

        const axiosheader = {
            headers:{
                "Accept":"application/json",
            }
        } 
        const res = await axios.post("http://localhost:2000/organizer/register" , bodyparametr , axiosheader);
        console.log(res.data);
        
    }catch(error){
            console.log(error);
        }
    }


    const loginForOrganizer = async (email  , password ) => {
        try {

            const bodyPara = {
                email:email,
                password: password
            }
            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                }
            }

            const res = await axios.post("http://localhost:2000/organizer/login" , bodyPara , axiosheader);
            const token = localStorage.setItem('x-auth-token' , res.data.token);
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return <AuthContext.Provider value={{loginForSponser , registerforSponser , RegisterForOrganizer , loginForOrganizer}} >{children}</AuthContext.Provider>
}

export {AuthProvider , AuthContext};