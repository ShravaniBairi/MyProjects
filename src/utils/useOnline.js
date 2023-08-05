
import {useState} from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true)
    
    useeffect(() =>{

        const handleOnline = () => {
            setIsOnline(true)
        }
        const handleOffline = () => {
            setIsOnline(false)
        }

        window.addEventListener("online",handleOnline)
        
        window.addEventListener("offline",handleOffline);
        return() =>
        {
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);

        }
    },[]);

    return isOnline;



}

export default useOnline