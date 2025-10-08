import React from "react";
import Container from "../components/Container";
import Banner from "../components/Banner";
import Stat from "../components/Stat";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner></Banner>
      </Container>
      <Stat></Stat>
    </div>
  );
};

export default Home;
