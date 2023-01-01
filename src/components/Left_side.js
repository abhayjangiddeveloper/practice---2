import React from "react";
import './Left_side.css';

const searchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>)

const post_img = ("https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80");

const user = ("https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80");

const articles_imgs = ("https://images.unsplash.com/photo-1670786611555-5218c1407492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");


const Left_side = () => {
    return (
        <>
            <div className="links_container">
                <ul>
                    <a href="#">Project</a>
                    <a href="#">Remote</a>
                    <a href="#">Teamwork</a>
                    <a href="#">Productivity</a>
                    <a href="#">Marketing</a>
                </ul>
                <div className="search_button">
                    {searchIcon}
                </div>
            </div>
            <div className="main_container">
                <div className="Left_side_container">
                    <div className="main_contant_container">
                        <h1>Productivity</h1>
                        <img src={post_img} alt="winter" className="post_img" />
                        <h2>Littel Things Do Make A Difference</h2>
                        <p>Why do you want to motivate yourself? Actually, just answering that question fully can be one of the better ways to get your daily motivation.</p>
                        <div className="user">
                            <div className="user_container">
                                <img src={user} alt="user" className="user_img" /> Kathryn Sheltan
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right_container">
                    <h3>Recent articles</h3>
                    <div className="recent_articles_container">
                        <div className="img">
                        </div>
                        <div className="recent_articles_text">
                            <h3>Common Symbols And Their Meanings</h3>
                            <div className="user">
                                <img src={user} alt="" className="user_img" />
                                <span>Susie Russell</span>
                            </div>
                        </div>
                    </div>
                    <div className="recent_articles_container">
                        <div className="img">
                            
                        </div>
                        <div className="recent_articles_text">
                            <h3>Success Steps For Your Business</h3>
                            <div className="user">
                                <img src={user} alt="" className="user_img" />
                                <span>Connor Parsons</span>
                            </div>
                        </div>
                    </div>
                    <div className="recent_articles_container">
                        <div className="img">
                        </div>
                        <div className="recent_articles_text">
                            <h3>The Strength Of Your Belief</h3>
                            <div className="user">
                                    <img src={user} alt="" className="user_img" />
                                <span>Jonathan Yates</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Left_side;