import React from "react";
import style from "./Style.module.css";
import SearchIcon from './SearchIcon';

const SearchInput = ({ value, onValueChange, submit, disableTransition }) => {
  return (
    <>
      <div className={style.searchContainer}>
        <div className={style.iconWrapper}>
          <SearchIcon />
        </div>

        <div className={style.buffer} />

        <div>
          <input
            type={"text"}
            value={value}
            onChange={({ target: { value } }) => onValueChange(value)}
            className={style.input}
            onSubmit={submit}
            name="search"
          />
          <label
            for="search"
            className={`${style.searchLabel}${
              disableTransition ? ` ${style.noTransition}` : ""
            }`}
          >
            Search
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchInput;