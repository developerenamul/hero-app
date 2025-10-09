import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header></Header>

      {isLoading ? (
        <div className=" flex justify-center items-center z-50">
          <Spinner />
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
