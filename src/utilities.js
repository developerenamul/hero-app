import { toast } from "react-toastify";
const storedAppData = () => {
  const appList = localStorage.getItem("installedLists");

  if (appList) {
    const storedData = JSON.parse(appList);
    return storedData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedData = storedAppData();
  //   console.log(id);

  const found = storedData.find((data) => data.id === id.id);
  if (found) {
    toast.warning("already exist");
    return;
  } else {
    storedData.push(id);
    const data = JSON.stringify(storedData);
    localStorage.setItem("installedLists", data);
    toast.success("added");
  }
};

const removeFromStoreDB = (id) => {
  const storedData = JSON.parse(localStorage.getItem("installedLists")) || [];
  const updatedData = storedData.filter((app) => app.id !== id);
  localStorage.setItem("installedLists", JSON.stringify(updatedData));
};
export { addToStoreDB, storedAppData, removeFromStoreDB };
