import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Container from "../components/Container";
import AppCards from "../components/AppCards";

const Apps = () => {
  const allData = useLoaderData();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredData = searchText
    ? allData.filter((app) => app.title.toLowerCase().includes(searchText))
    : allData;
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center">Our All Applications</h2>
        <p className="text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <Container>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">({allData.length}) Apps Found</h2>
          <input
            type="search"
            placeholder="Search"
            className="input input-neutral"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <AppCards slicedData={filteredData}></AppCards>
      </Container>
    </div>
  );
};

export default Apps;
