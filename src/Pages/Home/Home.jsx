import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Service from "../../Components/Service/Service";
import InsightfullInspiration from "../../Components/InsightfullInspiration/InsightfullInspiration";
import Plan from "../../Components/Plan/Plan";


const Home = () => {

    const services = useLoaderData()
    

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl font-bold mt-10 mb-10 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-20">
            {
                services?.map(service=> <Service key={service.id} service={service}></Service>)
            }
            </div>       
            <InsightfullInspiration></InsightfullInspiration>  
            <Plan></Plan>  
        </div>
    );
};

export default Home;