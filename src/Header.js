import React from "react"
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className ="header">
            <Link to="/">
            <img 
            className="header_logo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
             />
             </Link>
            <div className="header_search">
                <input
                className="header_searchInput" 
                type="text" />
                <SearchIcon
                className="header_searchIcon" />
            </div>    

            <div className="header_nav">
                <div className='header_option'>
                    <span
                    classsName='header_optionLineOne'>HelloGust</span>
                    <span
                    className='header_optionLineTwo'>SingIn</span>
                    </div>

                    <div className='header_option'>
                        <span
                    className='header_optionLineTwo'>Returns</span>
                        <span
                    className='header_optionLineTwo'>& Orders</span>
                    </div>

                    <div className='header_option'>
                        <span
                    className='header_optionLineTwo'>Your</span>
                    <span
                    className='header_optionLineTwo'>prime</span>

                    </div>
                    <Link to="/checkout">
                <div 
                className="header_optionBasket">
                    <ShoppingBasketIcon /> 
                    <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
                    </Link>
                </div>
        </div>
    )
}

export default Header
