import React from "react";
import Container from "../components/Container";
import Banner from "../components/Banner";
import Stat from "../components/Stat";
import { useLoaderData } from "react-router";
import AppCards from "../components/AppCards";

const Home = () => {
  const allData = useLoaderData();

  const slicedData = allData.slice(0, 8);

  return (
    <div>
      <Container>
        <Banner></Banner>
      </Container>
      <Stat></Stat>
      <Container>
        <AppCards slicedData={slicedData}></AppCards>
      </Container>
    </div>
  );
};

export default Home;
