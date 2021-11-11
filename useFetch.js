import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const isMounted= useRef(true);
    useEffect(() => {
        return ()=>{
            isMounted.current=false;
        }
    }, [])
    const [datosApi, setdatosApi] = useState({data: null,loading:true, error: null});
    useEffect(() => {
        // cada que cambia la url hace una solicitud a la api
        setdatosApi({data: null,loading:true, error: null});
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                if (isMounted.current) {
                    setdatosApi({data:data,loading:false,error:null});
                }        
            });
        return () => { 
           
        }
    }, [url]);
   // console.log(url);
    return datosApi;
}
