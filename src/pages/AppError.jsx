import React from "react";
import appErrorImg from "../assets/App-Error.png";
import Container from "../components/Container";
// import { useRouteError } from "react-router";
const AppError = () => {
  // const error = useRouteError();
  return (
    <div>
      <Container>
        <div className="  flex flex-col justify-center items-center">
          <img src={appErrorImg} alt="app error" />
        </div>
      </Container>
    </div>
  );
};

export default AppError;
