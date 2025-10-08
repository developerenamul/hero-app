import Container from "./Container";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#001931] min-h-[calc(100vh-295px)]">
      <Container>
        <div className="py-10 flex justify-between items-center">
          <div className="logo">
            <Link to={"/"} className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10 object-cover" />
              <span className="text-white">Hero.io</span>
            </Link>
          </div>
          <div className="text-white">
            <h2 className="mb-2 font-bold">Social Links</h2>
            <div className="flex items-center gap-2">
              <FaFacebook />
              <FaXTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="divider divider-info"></div>
        <h3 className="text-white text-center pb-5">
          &copy; All right reserved
        </h3>
      </Container>
    </div>
  );
};

export default Footer;
