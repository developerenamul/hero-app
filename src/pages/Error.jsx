import { Link } from "react-router";
import errorImg from "../assets/error-404.png";
const Error = () => {
  return (
    <div className="  flex flex-col justify-center items-center">
      <img src={errorImg} alt="error page" className="" />
      <h2 className="text-2xl font-bold">OOPS...! Page Not Found! </h2>
      <p>The page you are looking for is not available.</p>
      <Link to={"/"} className="btn bg-green-400 font-bold text-white">
        {" "}
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
