import { ToastContainer } from "react-toastify";
import { FaStar } from "react-icons/fa";
import Container from "../components/Container";
import { Link, useLocation, useParams } from "react-router";
import { FaDownload } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import RenderBarChart from "../components/RenderBarChart";
import { addToStoreDB } from "../utilities";

const AppDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const {
    image,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    title,
  } = location.state.addData;
  const { ratings } = location.state.addData;

  const [Isinstalled, setIsinstalled] = useState(false);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("installedLists")) || [];
    const alreadyInstalled = storedData.find((app) => app.id === +id);
    if (alreadyInstalled) {
      setIsinstalled(true);
    }
  }, [id]);
  const handleIsinstalled = () => {
    setIsinstalled(true);
    addToStoreDB(location.state.addData);
  };
  return (
    <div>
      <ToastContainer />
      <Container>
        <div className="card flex lg:flex-row flex-col  bg-base-100 shadow-sm">
          <figure>
            <img
              src={image}
              alt={title}
              className="w-[200px] h-[250px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Developed By . {companyName}</p>
            <div className="flex lg:flex-row flex-col gap-2 items-center">
              <div className="p-5 flex flex-col items-center ">
                <FaDownload className="text-green-600" />
                <small>Downloads</small>
                <h2 className="text-3xl font-bold">{downloads}</h2>
              </div>
              <div>
                <div className="p-5 flex flex-col items-center ">
                  <FaStar className="text-yellow-600" />
                  <small>Average Ratings</small>
                  <h2 className="text-3xl font-bold">{ratingAvg}</h2>
                </div>
              </div>
              <div>
                <div className="p-5 flex flex-col items-center ">
                  <BiSolidLike className="text-purple-600" />
                  <small>Total Reviews</small>
                  <h2 className="text-3xl font-bold">{reviews}</h2>
                </div>
              </div>
            </div>
            <button
              onClick={handleIsinstalled}
              disabled={Isinstalled}
              className={`btn text-black font-bold max-w-[350px] ${
                Isinstalled ? "bg-green-400 cursor-not-allowed" : "bg-green-500"
              }`}
            >
              {Isinstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </Container>
      <RenderBarChart ratings={ratings}></RenderBarChart>
      <Container>
        <p>
          <span className="text-xl font-bold">Description</span> <br />
          {description}
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest. A unique feature of this app is
          the integration of task lists with timers. You can assign each task to
          a specific Pomodoro session, making your schedule more structured. The
          built-in analytics show not only how much time you’ve worked but also
          which tasks consumed the most energy. This allows you to reflect on
          your efficiency and adjust your workflow accordingly. The app also
          includes optional background sounds such as white noise, nature
          sounds, or instrumental music to create a distraction-free atmosphere.
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </p>
      </Container>
    </div>
  );
};

export default AppDetails;
