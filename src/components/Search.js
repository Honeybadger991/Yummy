
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import asian from '../assets/soup.svg';
import italian from '../assets/pizza-slice.svg';
import american from '../assets/burger.svg';
import european from '../assets/steak.svg';
import thai from '../assets/cup.svg';
import mexican from '../assets/nachos.svg';
import search from '../assets/search.svg';


const Search = () => {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${inputValue}`);
        setInputValue('');
    }

    return (
    <div className="search-wrapper">
        <ul className="national-list">
            <NavLink to="/cuisine/asian" className="national-item">
                <img src={asian} alt="national-cuisine-icon" className="national-item-img" />
                <div className="national-item-name">Asian</div>
            </NavLink>
            <NavLink to="/cuisine/italian" className="national-item">
                <img src={italian} alt="national-cuisine-icon" className="national-item-img" />
                <div className="national-item-name">Italian</div>
            </NavLink>
            <NavLink to="/cuisine/american" className="national-item">
                <img src={american} alt="national-cuisine-icon" className="national-item-img" />
                <div className="national-item-name">American</div>
            </NavLink>
            <NavLink to="/cuisine/european" className="national-item">
                <img src={european} alt="national-cuisine-icon" className="national-item-img" />
                <div className="national-item-name">European</div>
            </NavLink>
            <NavLink to="/cuisine/thai" className="national-item">
                <img src={thai} alt="national-cuisine-icon" className="national-item-img" />
                <div className="national-item-name">Thai</div>
            </NavLink>
            <NavLink to="/cuisine/mexican" className="national-item">
                <img src={mexican} alt="national-cuisine-icon" className="national-item-img" />
                <div className="national-item-name">Mexican</div>
            </NavLink>
        </ul>
        <form name='search-form' className="search-form" onSubmit={e => onSubmitHandler(e)}>
            <input 
            type="text" 
            id='recipe-name'
            className="search-input" 
            placeholder='Search here..'
            value={inputValue}
            autoComplete='off'
            onChange={e => setInputValue(e.target.value)}/>
            <button type='submit' className="search-button">
                <img src={search} alt="search-icon" className="search-icon" />
            </button>
        </form>
    </div>
  )
}

export default Search