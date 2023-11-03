import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="h-52 w-full" src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p> price:- ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkOut/${_id}`}>
            <button className="badge badge-outline">
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
