import resturantList from "../config";
import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from 'react'// named Import use state
import Shimmer from './Shimmer';

// Hook -> It is a just a normal function

// useeffectHook -> it is a hook 

// 1. loadsPage => Api => Rendered the page
// 2. rendered the Intail page call the apia nd updateApi

const filterData = (searchText, resturants) => {
    const filterData = resturants.filter((resturant) =>
        resturant?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

const Body = () => {
    const [allResturnats, setAllResturnats] = useState([])
    // const text = "hellow"
    const [filteredResturants, setFilteredResturants] = useState([]);
    // searchText is a local state variable
    const [searchText, setSearchText] = useState() //return [variableName, function to updateThe varibale] to create state variable

    // it call on two parameter one is callback Function and one is dependency array
    // my useEffect has callback function and when callback function called when searchteaxt changes
    useEffect(() => {
        console.log("call this when dependency is changed");
        getResturnats();
    }, []);

    const getResturnats = async () => {
        const data = await fetch("http://localhost:8000/");
        const json = await data.json();
        console.log(json)
        setAllResturnats(json)
        setFilteredResturants(json)
    }

    // conditional rendering
    // if resturant is empty => show shimmer UI
    // if resturnat has data => actual data UI

    // not render(early Return )
    if (!allResturnats) return null;

    if (filteredResturants?.length === 0) {
        return <h1>No Restraunts Match Your Filder </h1>
    }

    return (filteredResturants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        //e.target.value => Whatever you write In Input
                        setSearchText(e.target.value)
                    }}
                />
                <button className="search-btn"
                    onClick={() => {
                        // need to filter the data 
                        // update the state - resturants variable
                        const data = filterData(searchText, allResturnats);
                        setFilteredResturants(data);
                    }}>Search</button>
            </div>
            <div className="resturant-list">
                {/* you have to write logic here for No Resturants Found here */}
                {filteredResturants.map(resturant => {
                    return <RestrauntCard{...resturant} key={resturant._id} />;
                })
                }
            </div>
        </>
    );
};

export default Body;