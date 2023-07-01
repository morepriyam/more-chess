import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
import {Cpu,GameController,SignOut} from 'phosphor-react';



export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
        <Link to={"/homepage"}><img src='assets/more-chess.png' alt=''/></Link>
        <Link to={"/1vs1"}><GameController size={60} color="#A42838" weight="light" /><br />1v1</Link>
        <Link to={"/computer"}><Cpu size={60} color="#A42838" weight="light" /><br />Computer</Link>
        <Link to={"/logout"}><SignOut size={60} color="#A42838" weight="light" /><br />SignOut</Link>

        </div>
    </div>
  )
}

export default Navbar;

