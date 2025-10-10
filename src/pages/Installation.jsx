import { useEffect, useState } from "react";
import Container from "../components/Container";
import InstallationCard from "../components/InstallationCard";
import { removeFromStoreDB, storedAppData } from "../utilities";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  // const appsData = storedAppData();
  const [appsData, setAppsData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  useEffect(() => {
    const data = storedAppData();
    setAppsData(data);
  }, []);

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    const sorted = [...appsData].sort((a, b) => {
      if (order === "High") {
        return b.downloads - a.downloads;
      } else if (order === "Low") {
        return a.downloads - b.downloads;
      } else {
        return 0;
      }
    });
    setAppsData(sorted);
  };

  const handleUninstall = (id) => {
    removeFromStoreDB(id);
    setAppsData((prev) => prev.filter((app) => app.id !== id));
    toast.success("App uninstalled successfully ✅");
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Container>
        {appsData.length === 0 ? (
          <h2 className="text-2xl font-bold text-center">No Apps Selected</h2>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Your Installed Apps</h2>
            <p>Explore All Trending Apps on the Market developed by us</p>
          </div>
        )}

        <div className="flex md:flex-row flex-col gap-3  justify-between items-center mt-5">
          <p className="font-bold">{appsData.length} Apps found</p>
          <select className="select" value={sortOrder} onChange={handleSort}>
            <option>Sort By Downloads</option>
            <option>High</option>
            <option>Low</option>
          </select>
        </div>

        <div className="mt-5">
          {appsData.map((app) => (
            <InstallationCard
              key={app.id}
              app={app}
              onUninstall={handleUninstall}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Installation;
