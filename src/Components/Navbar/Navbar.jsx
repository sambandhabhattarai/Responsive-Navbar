import React,{useState} from 'react'
import "./Navbar.css"
import {AiFillCloseCircle,AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [active,setActive] = useState('navbar');
    const showMenu = ()=>{
        if(active === 'navbar'){
            setActive('navbar displayMenu');
        }
        // else{
        //     setActive('navbar');
        // }
    }
    const removeMenu = ()=>{
            setActive('navbar');
    }

  return (
    <header className="header">
        <div className="logoDiv">
            <h2>Reyy!</h2>
        </div>

        <div className={active}>
            <ul onClick={removeMenu} className="navMenu">
                <li className='navItem'><a href="#" className="navLink">Home</a></li>
                <li className='navItem'><a href="#service" className="navLink">Services</a></li>
                <li className='navItem'><a href="#about" className="navLink">About</a></li>
                <li className='navItem'><a href="#contact" className="navLink">Contact</a></li>
                <li className='navItem'><a href="#encrypt" className="navLink">Encrypt</a></li>
            </ul>
            <div className="closeNavbarIcon" onClick={removeMenu}>
                <AiFillCloseCircle className='icon'/>
            </div>
        </div>

        <div className="toggleNavbarIcon" onClick={showMenu}>
            <AiOutlineMenu className='icon'/>
        </div>
    </header>
  )
}

export default Navbar