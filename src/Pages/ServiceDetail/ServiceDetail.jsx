import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetail = () => {
    const [serviceDetail, setServiceDetail] = useState()
    const serviceDetails = useLoaderData()
    
    const {id} = useParams()
    const idInt = parseInt(id)
   
    useEffect(()=>{
        
        const findService = serviceDetails?.find((servicedetail)=> servicedetail.id === idInt)
        console.log(findService)
        setServiceDetail(findService)
    },[idInt,serviceDetails])
    
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetail;