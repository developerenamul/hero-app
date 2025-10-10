import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import Container from "./Container";
import bannerImg from "../assets/hero.png";
const Banner = () => {
  return (
    <div>
      <Container>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-5">
            We Build <br />
            <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">
              Productive Apps
            </span>
          </h2>
          <p className="mb-5">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <a
            className="btn mr-2"
            target="_blank"
            href="https://play.google.com/store/games"
          >
            <BiLogoPlayStore /> Google Play
          </a>
          <a
            className="btn"
            target="_blank"
            href="https://play.google.com/store/apps?hl=en"
          >
            <FaAppStoreIos />
            App Store
          </a>
          <img src={bannerImg} alt="banner image" className="mt-5" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
