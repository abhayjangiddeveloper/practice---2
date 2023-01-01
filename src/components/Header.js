import React from "react";
import { useState } from "react";
import "./Header.css"

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const toglee_button = () =>{
        setToggle(!toggle)
    }
    return (
        <>
            <nav className="nav_main_container">
                <div className={toggle?"mobile_size":"Header_container"}>
                    <div className="menu_container">
                        <ul>
                            <a href="#">Product</a>
                            <a href="#">Pricing</a>
                            <a href="#">Use Cases</a>
                            <a href="#">Blog</a>
                        </ul>
                    </div>
                    <div className="button_container">
                        <button className="button">Log In</button>
                        <button className="button dark">Get started</button>  
                    </div>

                </div>
                <div className="manu_button_container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 menu_button open_menu_button" onClick={toglee_button}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 menu_button close_menu_button" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> */}

                </div>
            </nav>
        </>
    );
}

export default Header;