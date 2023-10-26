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
            <option value="fruit">Fruits</option>
            <option value="meats">Meats</option>
            <option value="fish">Fish</option>
            <option value="grocery">Grocery</option>
            <option value="frozen">Frozen Food</option>
            <option value="beverages">Beverages</option>
            <option value="household">Household</option>
          </select>

          <button className=" btn-primary-searchbar">
            <NavLink
              className="sectiom-item-Link"
              to={{
                pathname: `/products/${searchKey.catageory}/any/${searchKey.key}`,
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
