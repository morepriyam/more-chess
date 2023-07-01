import {Link} from 'react-router-dom';
import './navbar.css';
import {Cpu,GameController,SignOut} from 'phosphor-react';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
        <Link to={"/"}><img src='assets/more-chess2.png' alt='assets/more-chess.png'className='logo'/></Link>
        <Link to={"/1vs1"}><GameController size={60} color="#C6AA6B" weight="light" /><br />1v1</Link>
        <Link to={"/computer"}><Cpu size={60} color="#C6AA6B" weight="light" /><br />Computer</Link>
        <Link to={"/logout"}><SignOut size={60} color="#C6AA6B" weight="light" /><br />Signout</Link>
   </div>
   </div>
  )
}

export default Navbar;