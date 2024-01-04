import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="fluid_container">
        <div>
          <div className="nav_container">
            <div className="category">
              <div className="category_icon">
                <span>
                  <MenuIcon style={{ marginRight: "3px" }} />
                </span>
                <span>Categories</span>
              </div>
              <div className="category_dropdown">
                <ArrowDropDownIcon />
              </div>
            </div>

            <div className="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li style={{ width: "8rem" }}>
                  <Link to="/shopdetail">Shop Detail</Link>{" "}
                </li>
                <li style={{ display: "flex" }}>
                  <Link to='/shopcart'>Cart</Link>
                  {/* <ArrowDropDownIcon /> */}
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="cart_wish">
              <div className="wishlist">
                <span>
                  <FavoriteIcon
                    style={{ marginRight: "3px", color: "#ffc800" }}
                  />
                </span>
                <span>0</span>
              </div>
              <div className="nav-cart">
                <span>
                  <ShoppingCartIcon
                    style={{ marginRight: "3px", color: "#ffc800" }}
                  />
                </span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sub_category_container">
      <div className="sub_category">
        <ul>
          <li><a href="#">Dresses</a></li>
          <li><a href="#">Shirt</a></li>
          <li><a href="#">Jeans</a></li>
          <li><a href="#">Swimwear</a></li>
          <li><a href="#">Sleepwear</a></li>
          <li><a href="#">Jumpsuits</a></li>
          <li><a href="#">Blazers</a></li>
          <li><a href="#">Jackets</a></li>
          <li><a href="#">Shoes</a></li>
        </ul>
      </div>

      </div>
    </>
  );
};

export default Navbar;
