import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Container from "../components/Container";
import AppCards from "../components/AppCards";
import Spinner from "../components/Spinner";
const Apps = () => {
  const allData = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
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
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
          <h2 className="text-xl font-bold">
            ({filteredData.length >= 0 ? filteredData.length : allData.length})
            Apps Found
          </h2>
          <input
            type="search"
            placeholder="Search"
            className="input input-neutral"
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : filteredData.length > 0 ? (
          <AppCards slicedData={filteredData} />
        ) : (
          <div className="text-center text-gray-500 text-lg py-10">
            😒 No App Found
          </div>
        )}
      </Container>
    </div>
  );
};

export default Apps;
