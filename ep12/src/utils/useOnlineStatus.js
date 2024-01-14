import { useEffect,useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus,setOnlineStats] = useState(true);
    //check if online 

    useEffect(()=>{
    
        window.addEventListener("offline",()=>{
        setOnlineStats(false);
        })

        window.addEventListener("online",()=>{
        setOnlineStats(true);
        })
    },[]);

    //boolean value 
    return onlineStatus;

}
export default useOnlineStatus;