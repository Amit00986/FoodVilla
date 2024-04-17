import resturantList from "../config";
import RestrauntCard from "./ResturantCard";

const Body = () => {
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search"  value=""/>
                <button></button>
            </div>
            <div className="resturant-list">
                {resturantList.map(resturant => {
                    return <RestrauntCard{...resturant.data} key={resturant.data.id} />;
                })
                }
            </div>
        </>
    );
};

export default Body;