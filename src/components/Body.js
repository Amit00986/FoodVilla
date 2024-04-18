import resturantList from "../config";
import RestrauntCard from "./ResturantCard";
import { useState } from 'react'// named Import use state


const filterData = (searchText, resturants) => {
    const filterData = resturants.filter((resturant) =>
        resturant.data.name.includes(searchText));
    return filterData;
}

const Body = () => {
    // const text = "hellow"
    const [resturants, setResturants] = useState(resturantList);

    // searchText is a local state variable
    const [searchText, setSearchText] = useState() //return [variableName, function to updateThe varibale] to create state variable

    return (
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
                        const data = filterData(searchText, resturants);
                        setResturants(data);
                    }}>Search</button>
            </div>
            <div className="resturant-list">
                {resturants.map(resturant => {
                    return <RestrauntCard{...resturant.data} key={resturant.data.id} />;
                })
                }
            </div>
        </>
    );
};

export default Body;