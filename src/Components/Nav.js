import { NavLink } from 'react-router-dom';
// import logo from '../assets/images/logo-bg.png';
import classes from'../styles/Nav.module.css';

export default function Nav() {
    return (
       <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="##" className={classes.brand}>
                        
                        <h3>Quiz<span className='text-purple-600 ml-2'>Crakerz</span></h3>
                    </a>
                </li>
            </ul>
            <div className= {`${classes.links}`}>
                <NavLink to='/' className={({ isActive }) => isActive ? ['text-purple-600'].join('') : ['text-black'].join('')}>Home</NavLink>
                <NavLink to='/statistics' className={({ isActive }) => isActive ? ['text-purple-600'].join('') : ['text-black'].join('')}>Statistics</NavLink>
                <NavLink to='/blog' className={({ isActive }) => isActive ? ['text-purple-600'].join('') : ['text-black'].join('')}>Blog</NavLink>
            </div>
       </nav>
    );
}