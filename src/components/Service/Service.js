import React, {Component} from 'react';
import classes from './Service.css';
import Header from '../Header/Header';
import Clinic1 from '../../assets/clinic1.jpg';
import Clinic2 from '../../assets/clinic2.jpg';
import Clinic3 from '../../assets/clinic3.jpg';

class Service extends Component{
    render(){
        return(
            <div className={classes.container}>
                    <div className={classes.navigation}>
                        <div className={classes.navigationHolder}><Header properties={this.props}/></div>
                    </div>
                    <div className={classes.mainBody}>
                        <h1>Our Services</h1>
                        <p><strong>Choose from the List of Services Below : </strong></p>
                        <div className={classes.servicesHolder}>
                                <div className={classes.imageHolder}>
                                    <img className={classes.image} src={Clinic1} alt="clinic1.jpg" />
                                    <div className={classes.imageText}>
                                        <h1>Holistic Healthcare Package</h1>
                                        <h3>INR 1500</h3>
                                        <h4>Our Preventative healthcare package that covers entire body checkup.</h4>
                                        <button className={classes.bookingBtn}>Book Appointment</button>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className={classes.imageHolder}>
                                    <img className={classes.image} src={Clinic2} alt="clinic1.jpg" />
                                    <div className={classes.imageText}>
                                        <h1>Holistic Healthcare Package</h1>
                                        <h3>INR 1600</h3>
                                        <h4>Our Preventative healthcare package that covers every facet of your Needs.</h4>
                                        <button className={classes.bookingBtn}>Book Appointment</button>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className={classes.imageHolder}>
                                    <img className={classes.image} src={Clinic3} alt="clinic1.jpg" />
                                    <div className={classes.imageText}>
                                        <h1>Holistic Healthcare Package</h1>
                                        <h3>INR 1230</h3>
                                        <h4>Our Preventative healthcare package that covers entire body checkup.</h4>
                                        <button className={classes.bookingBtn}>Book Appointment</button>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Service;