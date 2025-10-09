import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const AppCard = ({ card }) => {
  const { image, title, downloads, ratingAvg } = card;

  return (
    <Link to={`/apps/app-details/${card.id}`} state={{ addData: card }}>
      <div className="card bg-base-100 shadow-sm border">
        <figure className="p-3">
          <img
            src={image}
            alt={title}
            className="h-[250px] w-[200px] object-cover rounded"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center  pr-0 gap-4">
            <p className=" flex items-center gap-1 bg-green-300 p-1 rounded font-bold">
              <span>
                <FaDownload />
              </span>
              <span>{downloads}</span>
            </p>
            <p className="flex items-center gap-1  bg-amber-300 p-1 rounded font-bold ">
              <span>
                <FaStar />
              </span>
              <span>{ratingAvg}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
