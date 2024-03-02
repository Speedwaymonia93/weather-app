import React from "react";
import { useAPI } from "../../services/ApiContext";
import { IoSearch } from "react-icons/io5";
const TopBar = () => {
  const { setCity, fetchData, city } = useAPI();

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form className="top-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cityInput"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
        />
        <button className="search-icon" type="submit">
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default TopBar;
