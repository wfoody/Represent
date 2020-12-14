import React from 'react'
import './styles/search.css'
import { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import logo from '../images/america.jpg'
import { NavLink } from 'react-router-dom'
import useOnclickOutside from "react-cool-onclickoutside";
import Footer from './Footer';

function Search(props) {

    const [address, setAddress] = useState("")

    const [openMenu, setOpenMenu] = useState(false)

    const ref = useOnclickOutside(() => {
        setOpenMenu(false);
    })

    const handleClickButton = () => {
        setOpenMenu(!openMenu);
    }

    const history = useHistory()

    let formattedAddress = address.split(" ").join("%20")


    const getRepInfoByAddress = () => {

        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDatTrCAc_AsUpv-RrJ1uT-a9kvyF6SJS8&address=${formattedAddress}`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                // props.onFetchReps({official: result.officials[0]}) /* set action for search to button, onChange and onClick */
                props.onFetchReps(result)
            }).then(() => toResults());
    }

    const toResults = () => {
        history.push('/results')
    }


    // onChange = (event) => {this.setAddress({[event.target.name]: event.target.value });
    // };

    // useEffect(() => {
    //     // getRepInfoByAddress
    // }, [])

    return (

        <div className='wholeComponent'>
            <h1 className='searchTitle'><NavLink to='/' className='searchTitle'>REPRESENT</NavLink></h1>
            <img src={logo} className='searchLogo' alt='American flag'/>

            <div>
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={setAddress}
                    className='boxAndSuggestions'>



                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <div className='inputAndButton'>
                                <input type='text' className='inputText' {...getInputProps({ placeholder: "ENTER ADDRESS TO FIND YOUR REPRESENTATIVES" })} required />
                                <button onClick={getRepInfoByAddress} className='searchButton'>SEARCH</button>
                            </div>
                            <div>
                                <div onClick={handleClickButton}></div>
                                {openMenu && <div ref={ref}></div>}
                            </div>
                            <div>
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map((suggestion) => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#0e448b" : "#fff",
                                        color: suggestion.active ? "#fff" : "#000000"
                                    }
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, { style })} className='dropdownItem' >
                                            {suggestion.description}

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        reps: state.reps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchReps: (reps) => dispatch({
            type: 'FETCH_REPS',
            payload: reps
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
