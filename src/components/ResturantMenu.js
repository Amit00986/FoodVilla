import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const ResturantMenu = () => {
    const { id } = useParams()

    const [resturant, setResturant] = useState({})

    useEffect(() => {
        getResturantInfo();
    }, []);

    const getResturantInfo = async () => {
        try {
            const data = await fetch(`http://localhost:8000/${id}`);
            const json = await data.json();
            console.log(json)
            setResturant(json);
        } catch (error) {

        }
    };

    return (
        <div className="menu">
            <h1>Resturant id: {id}</h1>
            <h2>{resturant.name}</h2>
            <img src={resturant.image} />
            <h3>{resturant.address}</h3>
            <h3>{resturant.rating} stars</h3>
            <div>
                {/* {console.log(resturant?.menu[0]?.name)} */}
                <h1>MENU</h1>
                <div>

                </div>
            </div>
        </div>
    )
};

export default ResturantMenu