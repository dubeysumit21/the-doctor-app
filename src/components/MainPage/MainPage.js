import React, {Component} from 'react';
import classes from './MainPage.css';
import homepageimage from '../../assets/hospital.jpg';
import telephone from '../../assets/telephone.png';
import {Route} from 'react-router-dom';

class mainPage extends Component{

    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div style={{width: '100%'}}>
              <body>
                <img className={classes.image} src={homepageimage} alt="background.jpg" />
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <div className={classes.toolbar}>
                            <p className={classes.logo} ><strong>Genesis</strong></p>
                            <div className = {classes.spacer} />
                            <img className = {classes.icon} src={telephone} alt="telephone.jpg" />
                            <p className = {classes.contact}><strong>+91 9031393108</strong></p>
                        </div>
                    </div>
                    <div className={classes.mainBody}>
                        <p className={classes.text1}><strong>WELCOME  TO</strong></p>
                        <p className={classes.text2}><strong>DIXIT HEALING CENTER</strong></p>
                        <p className={classes.text3}><strong>Homoepathic Clinic of Dr. Shravan Dixit is located in 
                            Jubilee Hills, Hyderabad. The clinic was established in 2006 and is one of the most reputeded Clinic in Hyderabad.</strong></p>
                        <button className={classes.btn} onClick = {() => this.props.history.push('/story')}>Explore</button>
                    </div>                 
                    <div className={classes.footer}></div>
                </div>
              </body>  
            </div>
        )
    }
}

export default mainPage;