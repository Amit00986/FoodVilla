import React from 'react'

import ReactDOM from "react-dom/client";


const Title = () => (
    <a href='/'>
        <img
            className='logo'
            alt='logo'
            src='https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj' />
    </a>
);

const HeaderComponent = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


// config Driven UI
const config = [
    {
        type: "carsouel",
        cards: [
            {
                offerName: "50% off"
            },
            {
                offerName: "No Delivery Charge"
            }
        ]
    },
    {
        type: "resturants",
        cards: [
            {
                name: "Burger King",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QmokyLOQk2hL92cS-bOAs6lbKiw43DZp_BfJQPnqWQ&s",
                cusines: ["Burger, American"],
                rating: "4.2"
            },
            {
                name: "KFC",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QmokyLOQk2hL92cS-bOAs6lbKiw43DZp_BfJQPnqWQ&s",
                cusines: ["Burger, American"],
                rating: "4.2"
            },
        ],
    },
];


const resturantList = [
    {
        type: "resturant",
        data: {
            id: "restaurant-1",
            name: "Restaurant 1",
            address: "613 Main St, Los Angeles, NY 54788",
            phone: "664-321-6065",
            cuisine: "Indian",
            rating: 2,
            price_range: "$$$",
            image: "https://source.unsplash.com/7/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            id: "restaurant-2",
            name: "Restaurant 2",
            address: "560 Main St, Phoenix, NY 96473",
            phone: "839-776-8780",
            cuisine: "Indian",
            rating: 2,
            price_range: "$$",
            image: "https://source.unsplash.com/random/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            id: "restaurant-3",
            name: "Restaurant 3",
            address: "152 Main St, Los Angeles, AZ 69945",
            phone: "487-125-3876",
            cuisine: "Indian",
            rating: 3,
            price_range: "$",
            image: "https://source.unsplash.com/u/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            id: "restaurant-4",
            name: "Restaurant 4",
            address: "838 Main St, Chicago, TX 45575",
            phone: "148-407-8317",
            cuisine: "Mexican",
            rating: 1,
            price_range: "$$$$",
            image: "https://source.unsplash.com/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            "id": "restaurant-5",
            "name": "Restaurant 5",
            "address": "143 Main St, Chicago, TX 94536",
            "phone": "864-920-1928",
            "cuisine": "Italian",
            "rating": 4,
            "price_range": "$",
            "image": "https://source.unsplash.com/o/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            "id": "restaurant-6",
            "name": "Restaurant 6",
            "address": "133 Main St, Los Angeles, CA 10067",
            "phone": "573-790-8458",
            "cuisine": "Italian",
            "rating": 1,
            "price_range": "$$$",
            "image": "https://source.unsplash.com/random/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            "id": "restaurant-7",
            "name": "Restaurant 7",
            "address": "966 Main St, Chicago, IL 96456",
            "phone": "482-194-8408",
            "cuisine": "Chinese",
            "rating": 3,
            "price_range": "$",
            "image": "https://source.unsplash.com/t/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            "id": "restaurant-8",
            "name": "Restaurant 8",
            "address": "441 Main St, Houston, IL 57169",
            "phone": "180-118-3732",
            "cuisine": "American",
            "rating": 4,
            "price_range": "$$$$",
            "image": "https://source.unsplash.com/l/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            "id": "restaurant-9",
            "name": "Restaurant 9",
            "address": "793 Main St, Los Angeles, IL 69273",
            "phone": "196-233-3084",
            "cuisine": "Chinese",
            "rating": 2,
            "price_range": "$$$$",
            "image": "https://source.unsplash.com/r/800x600"
        }
    },
    {
        type: "resturant",
        data: {
            "id": "restaurant-10",
            "name": "Restaurant 10",
            "address": "195 Main St, Los Angeles, NY 11957",
            "phone": "756-317-2492",
            "cuisine": "Indian",
            "rating": 5,
            "price_range": "$$$",
            "image": "https://source.unsplash.com/800x600"
        }
    }
];



const RestrauntCard = ({
    name,
    cuisine,
    image,
    address,
    rating
}) => {
    return (
        <div className='card'>
            <img src={image} />
            <h2>{name}</h2>
            <h3>{cuisine}</h3>
            <h4>{rating} stars</h4>
            <h4>{address}</h4>

        </div>
    );
};

const Body = () => {
    return (
        <div className="resturant-list">
            {resturantList.map(resturant => {
                return <RestrauntCard{...resturant.data} key={resturant.data.id} />;
            })
            }
        </div>
    );
};


const Footer = () => {
    return (
        <h4>Footer</h4>
    )
};


// React.Fragment => 
const Applayout = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Title)

root.render(<Applayout />)
