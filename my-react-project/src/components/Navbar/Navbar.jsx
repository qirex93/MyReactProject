import React from 'react';
import classes from './Navbar.module.css';


const Navbar = () => {
    return <nav className={classes.nav}>
        <div class={`${classes.nav_item} ${classes.active}`}>
            <a href='#'>Profile</a>
        </div>
        <div class={classes.nav_item}>
            <a href='#'>Messages</a>
        </div>
        <div class={classes.nav_item}>
            <a href='#'>News</a>
        </div>
        <div class={classes.nav_item}>
            <a href='#'>Music</a>
        </div>
        <div class={classes.nav_item}>
            <a href='#'>Settings</a>
        </div>
    </nav>
}

export default Navbar;