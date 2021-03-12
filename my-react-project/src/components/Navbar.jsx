import React from 'react';
import classes from './Navbar.module.css';


const Navbar = () => {
    return <nav className={classes.nav}>
        <div class={`${classes.nav_item} ${classes.active}`}>
            <a>Profile</a>
        </div>
        <div class={classes.nav_item}>
            <a>Messages</a>
        </div>
        <div class={classes.nav_item}>
            <a>News</a>
        </div>
        <div class={classes.nav_item}>
            <a>Music</a>
        </div>
        <div class={classes.nav_item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;