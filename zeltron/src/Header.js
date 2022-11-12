import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import { Zoom } from '@material-ui/core';

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      
    }
  }

  return (
    <div className="header">
     
        <Link to="/"> 
        <img
          className="header_logo"
          src="https://cdn.cp.adobe.io/content/2/dcx/186081ae-25ef-49a9-bf05-aaf801a6f482/rendition/preview.jpg/version/1/format/jpg/dimension/width/size/1200"
        />
        </Link>
        
      

        <Zoom in={true}>
        <div
        className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
            
        </div></Zoom>

      <div className="header_nav">
        <Link to={!user && '/login'}  >
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
          </Link>
        

        
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
          
        
      </div>
    </div>
  );
}

export default Header;