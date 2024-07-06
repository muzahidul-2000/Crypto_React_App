import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const {setCurrency}=useContext(CoinContext);
  function currencyHandler(event){
      switch(event.target.value){
        case "usd":{
          setCurrency({name:"usd",symbol:"$"});
          break;
        }
        case "eur":{
          setCurrency({name:"eur",symbol:"€"});
          break;
        }
        case "inr":{
          setCurrency({name:"inr",symbol:"₹"});
          break;
        }
        default:{
          setCurrency({name:"inr",symbol:"₹"});
          break;
        }
      }
  }
  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logo} alt="" className='logo'/>
      </Link>
      <ul>
      <Link to={'/'}><li>Home</li></Link>
        <li>Fatures</li>
        <li>Pricing</li>
        <li>Blog</li>
      
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up <img src={arrow_icon} alt=''/></button>
      </div>
    </div>
  )
}

export default Navbar