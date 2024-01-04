import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <span className="multi">MULTI</span>
          <span className="shop">SHOP</span>
        </div>
        <div className="search_bar">
          <input type="text" placeholder="Search for product..." className="input_product"/>
          <SearchIcon style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'0.65rem',border:'1px solid grey', borderLeft:'0',fontSize:'1.7rem',color:'#ffc800'}}/>
        </div>
        <div className="customer_service">
          <div className="customer_number">
            <span>Customer Service</span>
            <span>+ 012 345 6789</span>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Header;