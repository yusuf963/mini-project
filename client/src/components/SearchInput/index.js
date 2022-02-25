import React from 'react';
import style from './Style.module.css';
import SearchIcon from './SearchIcon';

const SearchInput = ({ value, onValueChange }) => {
  return (
    <>
      <div className={style.searchContainer}>
        <div className={style.iconWrapper}>
          <SearchIcon />
        </div>

        <div className={style.buffer} />

        <div>
          <input
            type={'text'}
            value={value}
            onChange={({ target: { value } }) => onValueChange(value)}
            className={style.input}
            name="search"
          />
          <label
            htmlFor="search"
            className={`${style.searchLabel}${
              value ? ` ${style.noTransition}` : ''
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
