import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';

// Components with Route tag already get props with routing information 
// To get this information in other components we need to include Higher Order Component withRouter 
const Navbar = (props)=>{
    console.log(props);
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a href='/' className='brand-logo'>Nav</a>
                <ul className='right'>
                    <li><Link to='/'>Page1</Link></li>
                    <li><NavLink to='/page2'>Page2</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);
