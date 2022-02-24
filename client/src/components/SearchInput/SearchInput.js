import React from 'react';
import style from './Style.module.css';

const SearchInput = ({ value, onValueChange, submit }) => {
    return (
        <>
            <div className={style.searchContainer}>
                <div className={style.iconWrapper}>
                    <img className={style.icon} src={'/images/searchIcon.svg'} alt="" />
                </div>

                <div className={style.buffer} />

                <div className={style.searchWrapper} >
                    <label for="search" className={style.searchLabel}>Search</label>
                    <input
                        type={'text'}
                        value={value}
                        onChange={({target: {value}}) => onValueChange(value)}
                        className={style.input}
                        onSubmit={submit}
                        name="search"
                    />
                </div>
            </div>
        </>
    );
};

export default SearchInput;