import "./searchBar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function SearchBar() {
  const [searchKey, setSearchKey] = useState({ key: "", catageory: "" });
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  function searchChangeHandler(event) {
    setSearchKey({ ...searchKey, key: event.target.value });
  }
  function selectChangeHandler(event) {
    setSearchKey({ ...searchKey, catageory: event.target.value });
  }

  return (
    <div className="search-bar-container">
      <form action="#" className="searchbar-form">
        <div className="input-text-searchbar">
          <input
            type="search"
            className="form-control-searchbar"
            style={{ width: "55%" }}
            placeholder="Search"
            onChange={searchChangeHandler}
          />
          <select
            className="catagories-select-searchbar"
            onChange={selectChangeHandler}
            value={searchKey.catageory}
          >
            <option value="" disabled hidden>
              Categories
            </option>

            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Meats">Meats</option>
            <option value="Fish">Fish</option>
            <option value="Grocery">Grocery</option>
            <option value="frozen">Frozen Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Household">Household</option>
          </select>

          <button className=" btn-primary-searchbar">
            <NavLink
              className="sectiom-item-Link"
              to={{
                pathname: `/products/${searchKey.catageory}/${searchKey.key}`,
              }}
            >
              <i className="fa fa-search"></i>
            </NavLink>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
