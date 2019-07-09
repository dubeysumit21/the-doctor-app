import React, {Component} from 'react';
import classes from './Story.css';
import Header from '../Header/Header';


class Story extends Component{
    render(){
        return(
            <div className={classes.container}>
                    <div className={classes.navigation}>
                        <div className={classes.navigationHolder}><Header properties={this.props}/></div>
                    </div>
                    <div className={classes.mainBody}>
                      <h1>Recommendations</h1>
                      <div className={classes.recommendations}>
                          <div className={classes.text}>
                              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                                  id est laborum.</h3>
                              <h2 style={{color: '#008040'}}><strong>Akinboye Richard</strong></h2>
                              <h4>NJA Entertainment</h4>
                          </div>
                          <br />
                          <br />
                          <div className={classes.text}>
                              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                                  id est laborum.</h3>
                              <h2 style={{color: '#008040'}}><strong>Akinboye Richard</strong></h2>
                              <h4>NJA Entertainment</h4>
                          </div>
                          <br/>
                          <br/>
                          <button className={classes.bookingBtn}>View All Recommendations</button>
                          <br />
                          <br />  
                      </div>
                    </div>
            </div>
        );
    }
}

export default Story;
