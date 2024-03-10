import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";

function Nav() {
    return (
        <nav className="topNav">
            <Link to="/">
                <h1>LOGO</h1>
            </Link>
            <div className="navPageLinksContainer">
                <ul className="navItemsList">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <div className="navRight">
                <Link to="/profile">
                    <FaUsers className="loginIcon" />
                </Link>

                <Link to="/login">
                    <FaUsers className="loginIcon" />
                </Link>

                <Link to="/cart">
                    <TiShoppingCart className="shoppingCart" />
                </Link>

                <button className="logOutButton">Log Out</button>
            </div>
        </nav>
    );
}

export default Nav;
