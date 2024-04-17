import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';


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


const Footer = () => {
    return (
        <h4>Footer</h4>
    )
};


// React.Fragment => 
const Applayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(Title)

root.render(<Applayout />)
