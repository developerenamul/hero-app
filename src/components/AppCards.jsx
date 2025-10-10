import { Link, useLocation } from "react-router";
import AppCard from "./AppCard";

const AppCards = ({ slicedData }) => {
  const location = useLocation();

  return (
    <div>
      <div
        className={`text-center ${
          location.pathname === "/" ? "block" : "hidden"
        }`}
      >
        <h2 className="font-bold text-3xl">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="cards-container grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-2 gap-5 md:gap-3  mt-5">
        {slicedData.map((card) => (
          <AppCard key={card.id} card={card}></AppCard>
        ))}
      </div>

      {location.pathname === "/" && (
        <div className="flex justify-center mt-5">
          <Link
            to={"/apps"}
            className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white"
          >
            Show All
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppCards;
