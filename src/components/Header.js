import { useState } from "react";

const loggedInUser = () => {
    // APi Call to authenticate user
    return false
}

const Title = () => (
    <a href='/'>
        <img
            className='logo'
            alt='logo'
            src='https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj' />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            {
                // Js Expression only work here there is diff between Expression and statement
                isLoggedIn ? <button onClick={(e) => setIsLoggedIn(false)}>Logout</button> : <button onClick={(e) => setIsLoggedIn(true)}>Login</button>
            }


        </div>
    );
};

export default Header;

