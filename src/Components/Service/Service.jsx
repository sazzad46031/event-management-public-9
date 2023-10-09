import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const {id, image,name,price,description } = service || {}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;