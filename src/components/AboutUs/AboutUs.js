import React, {Component} from 'react';
import classes from './AboutUs.css';
import Header from '../../components/Header/Header';

class AboutUs extends Component{

    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div className={classes.container}>
                <div className={classes.navigation}>
                    <div className={classes.navigationHolder}><Header properties={this.props}/></div>
                </div>
            </div>
        )
    }
}

export default AboutUs;