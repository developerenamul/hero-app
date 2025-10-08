import React from "react";
import Container from "../components/Container";
import { useLocation, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state.addData);

  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default AppDetails;
