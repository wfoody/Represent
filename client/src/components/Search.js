/* global google */
import React, { useRef, useState } from 'react';
import './styles/search.css';
import { connect } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../images/america.jpg';
import useOnclickOutside from "react-cool-onclickoutside";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiKey = process.env.API_KEY;

function Search(props) {
    const [address, setAddress] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);
    const inputRef = useRef(null);
    const sessionToken = useRef(null);

    const ref = useOnclickOutside(() => {
        setOpenMenu(false);
    });

    const handleClickButton = () => {
        setOpenMenu(!openMenu);
    };

    const navigate = useNavigate();

    let formattedAddress = address.split(" ").join("%20");

    const getRepInfoByAddress = () => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${formattedAddress}`)
            .then(response => {
                if (!response.ok) {
                    throw toast('Please enter a valid US address!', {
                        className: "customToast"
                    });
                }
                return response.json();
            })
            .then(result => {
                console.log(result);
                props.onFetchReps(result);
            })
            .then(() => toResults());
    };

    const toResults = () => {
        navigate('/results');
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setAddress(inputValue);

        if (!window.google || !inputValue) return;

        if (!sessionToken.current) {
            sessionToken.current = new google.maps.places.AutocompleteSessionToken();
        }

        const service = new google.maps.places.AutocompleteSuggestion();
        const request = {
            input: inputValue,
            sessionToken: sessionToken.current
        };

        service.getSuggestions(request, (predictions, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                setSuggestions(predictions);
            } else {
                setSuggestions([]);
            }
        });
    };

    const handleSuggestionClick = (description) => {
        setAddress(description);
        setSuggestions([]);
    };

    function handleKeyPress(e) {
        if (e.keyCode === 13) {
            getRepInfoByAddress();
        }
    }

    return (
        <div className='wholeComponent'>
            <h1 className='searchTitle'><NavLink to='/' className='searchTitle'>REPRESENT</NavLink></h1>
            <img src={logo} className='searchLogo' alt='American flag' />
            <div>
                <div className='inputAndButton'>
                    <input
                        id='address-input'
                        ref={inputRef}
                        type='text'
                        className='inputText'
                        placeholder='ENTER ADDRESS TO FIND YOUR REPRESENTATIVES'
                        value={address}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyPress}
                        required
                    />
                    <button onClick={getRepInfoByAddress} className='searchButton'>SEARCH</button>
                </div>
                <div onClick={handleClickButton}></div>
                {openMenu && <div ref={ref}></div>}

                <div className='suggestionsContainer'>
                    {suggestions.map((suggestion) => (
                        <div
                            key={suggestion.place_id}
                            className='dropdownItem'
                            onClick={() => handleSuggestionClick(suggestion.description)}
                        >
                            {suggestion.description}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        reps: state.reps
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchReps: (reps) => dispatch({
            type: 'FETCH_REPS',
            payload: reps
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
