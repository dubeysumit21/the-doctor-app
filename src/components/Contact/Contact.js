import React, {Component} from 'react';
import classes from './Contact.css';
import Header from '../Header/Header';
import watsapp from '../../assets/005-whatsapp.svg';
import facebook from '../../assets/036-facebook.svg';
import twitter from '../../assets/008-twitter.svg';
import instagram from '../../assets/029-instagram.svg';

class Contact extends Component{
    render(){
        return(
            <div className={classes.container}>
                    <div className={classes.navigation}>
                        <div className={classes.navigationHolder}><Header properties={this.props}/></div>
                    </div>
                    <div className={classes.mainBody}>
                        <h1>Get Tips in your Inbox!</h1>
                        <h2>great way to stay updated about health tips, alerts and enhancements.</h2>
                        <br />
                        <input className={classes.inputClass} type="email" placeholder="Type in your Email.."/><button className={classes.btnClass}>Subscribe</button>
                        <h1>Share Website  On</h1>
                        <div className={classes.contact}>
                            <img className={classes.imgLogo} src={facebook} alt="facebook" />
                            <img className={classes.imgLogo} src={watsapp} alt="watsapp" />
                            <img className={classes.imgLogo} src={instagram} alt="instagram" />
                            <img style={{width: '40px'}} src={twitter} alt="twitter" />
                        </div>
                    </div>
            </div>
        )
    }
}

export default Contact;