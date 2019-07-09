import React, { Component } from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    state={
        drawerOpen: false
    }

    componentDidMount = (props) => {
      console.log(this.props.properties);
    }

    drawerHandler = () => {
        this.setState((prevState) => {
            return {drawerOpen : !prevState.drawerOpen}
          })
    }
    backdropClickHandler = () => {
        this.setState( {drawerOpen : false} );
    }

    render(){
        let backdrop;
        if(this.state.drawerOpen){
        backdrop=<Backdrop clicked={this.backdropClickHandler}/>
        }
        return(
            <div>
                <nav className={classes.toolbar_navigation}>
                      <div>
                        <DrawerToggleButton clicked={this.drawerHandler}/>
                      </div>
                      <div className={classes.toolbar_logo}><a href="/">Genesis</a></div>
                      <div className={classes.spacer} />
                      <div className={classes.toolbar_navigation_items}>
                        <ul>
                          <li><a onClick = {() => this.props.properties.history.push('/story')}>Our Story</a></li>
                          <li><a onClick = {() => this.props.properties.history.push('/meet')}>Meet The Doctor</a></li>
                          <li><a onClick = {() => this.props.properties.history.push('/services')}>Our Services</a></li>
                          <li><a onClick = {() => this.props.properties.history.push('/contact')}>Contact Us</a></li>
                        </ul>
                      </div>
                </nav>
                <SideDrawer show={this.state.drawerOpen} routing={this.props.properties}/>
                {backdrop}
            </div>
        )
    }
}

export default Header;