import React, {useState} from 'react';
import './nav.scss';
import SearchIcon from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null
    };


  return (
    <div className={isScrolled ? "nav scrolled" : "nav"}>
      <div className="container">
        <div className="left">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
            <SearchIcon className='icon' />
            <span>KIDS</span>
            <Notifications className='icon' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
            <div className="profile">
            <ArrowDropDownIcon className='icon' />
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav