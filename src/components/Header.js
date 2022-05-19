import React from 'react';
import H_L_img from '../assets/header-logo1.png';
import H_R_img from '../assets/header-logo2.png';
import telephone from '../assets/telephone.png'
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header-cont">
                <div className="left-cont">
                    <img src={H_L_img} alt="header-logo" />
                </div>
                <div className="right-cont">
                    <div className="tele-cont">
                        <img className='tele-img' src={telephone} alt="telephone" />
                        <h4 className='tele-number'>8095699900</h4>
                    </div>
                    <img src={H_R_img} alt="header-logo" />
                </div>
            </div>
        </>
    );
};

export default Header;
