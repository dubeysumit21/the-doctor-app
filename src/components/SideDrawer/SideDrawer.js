import React from 'react';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let drawerClasses = [classes.sideDrawer];
    if(props.show){
        drawerClasses = [classes.sideDrawer, classes.open];
    }
    return(
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><a onClick={() => props.routing.history.push('/story')}>Our Story</a></li>
                <li><a onClick={() => props.routing.history.push('/meet')}>Meet The Doctor</a></li>
                <li><a onClick={() => props.routing.history.push('/services')}>Our Services</a></li>
                <li><a onClick={() => props.routing.history.push('/contact')}>Contact Us</a></li>
            </ul>
            <div className={classes.navitems}>
                <button className={classes.btn}>Get an Appointment</button>
                <button className={classes.btn}>Call +91 9031393108</button>
            </div>
        </nav>
    )
}

export default sideDrawer;