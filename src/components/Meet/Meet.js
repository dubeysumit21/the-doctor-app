import React, {Component} from 'react';
import classes from './Meet.css';
import Header from '../Header/Header';
import axios from 'axios';
import doctor1 from '../../assets/doctor1.jpg';
import doctor2 from '../../assets/doctor2.jpg';
import doctor3 from '../../assets/doctor3.jpg';
import doctor4 from '../../assets/doctor4.jpg';
import doctor5 from '../../assets/doctor5.jpg';
import doctor6 from '../../assets/doctor6.jpg';
import Spinner from '../Spinner/Spinner';

class Meet extends Component{

    state = {
        doctorList : [
            {photo : doctor1 ,name : 'Dr Arpit Saxena', spec : 'Infertility', phone : '+91 9031393108'},
            {photo : doctor4 ,name : 'Dr Shravan Dixit', spec : 'ENT & Head Neck Surgeon', phone : '+91 81234567890'},
            {photo : doctor3 ,name : 'Dr Arun Kapldev', spec : 'Cancer Surgeon', phone : '+91 8987654321'},
            {photo : doctor2 ,name : 'Dr Savita Yadav', spec : 'Dernatalogist', phone : '+91 8074367027'},
            {photo : doctor5 ,name : 'Dr Prasant Yadav', spec : 'Plastic Surgeon', phone : '+91 9100736635'},
            {photo : doctor6 ,name : 'Dr Sujeet Khiste', spec : 'Dental Surgeon', phone : '+91 7488054528'}
        ],
        formFlag : false,
        checkoutFlag : false,
        currentDoctor : null,
        avlbDates : null,
        avlbSlots : null,
        submitMessage : null,
        dataToSubmit : {
            selectedDoctor: null,
            date : null,
            time : null,
            slot : null
        },
        spinner : false
    }

    doctorChangeHandler = (index) => {
        const newDataToSubmit = {...this.state.dataToSubmit};
        newDataToSubmit.selectedDoctor = this.state.doctorList[index].name;
        this.setState( { currentDoctor : this.state.doctorList[index], dataToSubmit : newDataToSubmit });
    }

    dateChecker = (event) => {
        event.preventDefault();
        axios.get('https://doctor-4793c.firebaseio.com/.json')
             .then(response => {
                this.setState( {avlbDates : Object.keys(response.data)})
             });
    }
    slotChecker = (event) => {
        event.preventDefault();
        axios.get('https://doctor-4793c.firebaseio.com/.json')
             .then(response => {
                this.setState( {avlbSlots : Object.keys(response.data[this.state.dataToSubmit.date][this.state.dataToSubmit.time])} );
             });
    }
    timeHandler = (event) => {
        const newDataToSubmit = {...this.state.dataToSubmit};
        newDataToSubmit.time = event.target.value;
        this.setState( {dataToSubmit : newDataToSubmit} );
    }
    submitDateHandler = (x, event) => {
        event.preventDefault();
        const newDataToSubmit = {...this.state.dataToSubmit};
        newDataToSubmit.date = x;
        this.setState({ dataToSubmit : newDataToSubmit});
    }
    submitSlotHandler = (x, event) => {
        event.preventDefault();
        const newDataToSubmit = {...this.state.dataToSubmit};
        newDataToSubmit.slot = x;
        this.setState({ dataToSubmit : newDataToSubmit});
    }
    openFormHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return {
                formFlag : !prevState.formFlag
            }
        } );
    }
    openCheckOutForm = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return {
                checkoutFlag : !prevState.checkoutFlag
            }
        } );
    }
    dataSubmitHandler = (event) => {
        this.setState( prevState => {
            return {
                spinner : !prevState.spinner
            }
        } );
        event.preventDefault();
        const order = this.state.dataToSubmit;
        axios.post("https://doctor-bookings.firebaseio.com/.json", order)
             .then(response => {
                const newDataToSubmit = {...this.state.dataToSubmit};
                newDataToSubmit.selectedDoctor = null;
                newDataToSubmit.date = null;
                newDataToSubmit.time = null;
                newDataToSubmit.slot = null;
                this.setState( { dataToSubmit : newDataToSubmit, spinner : false, currentDoctor : null, formFlag : false, checkoutFlag : false, avlbDates : null, avlbSlots : null} )
             });
    }

    render(){
        let dates = null;
        let slots = null;
        let submitMessage = null;
        if(this.state.submitMessage){
            submitMessage = <p>Your Booking is Confirmed</p>;
        }
        if(this.state.avlbDates){
            dates = <div>{this.state.avlbDates.map((x, index) => <button onClick = {(event) => this.submitDateHandler(x, event)} className={classes.avlbDateButton} key = {index} value={x}>{x}</button>)}</div>
        }
        if(this.state.avlbSlots){
            slots = <div>{this.state.avlbSlots.map((x, index) => <button onClick = {(event) => this.submitSlotHandler(x, event)} className={classes.avlbDateButton} key = {index} value={x}>{x}</button>)}</div>
        }
        let doctorInfo = <h1>Please Select a Doctor from Above List</h1>;
        if(this.state.currentDoctor){
            doctorInfo=(
                <div className={classes.doctorInfo}>
                            <div className={classes.doctorImageHolder}>
                                <img className={classes.doctorImage} src={this.state.currentDoctor.photo} alt="doctor1" />
                            </div>
                            <div className={classes.doctorDetails}>
                                <h1 style={{color: '#008040', textAlign: 'left'}}><strong>{this.state.currentDoctor.name}</strong></h1>
                                <hr></hr>
                                <h3 style={{textAlign: 'left'}}>{this.state.currentDoctor.spec.toUpperCase()}</h3>
                                <h5 style={{color: '#008040', textAlign: 'left'}}>MS - FERTILITY , DNB , MRCS(UK)</h5>
                                <h3 style={{textAlign: 'left'}}>{this.state.currentDoctor.phone}</h3>
                                <div>
                                    <button onClick = {(event) => this.openFormHandler(event)} className={classes.bookingBtn}>Book an Appointment</button>
                                    <button className={classes.bookingBtn}>Read More</button>
                                </div>
                            </div>
                </div>
            )
        }
        let doctorForm = null;
        if(this.state.formFlag){
            doctorForm = (
                <div className={classes.bookingForm}>
                            <form>
                                <h3>Name of Doctor</h3>
                                <hr style={{width : '17%', marginTop: '-12px'}} />
                                <h2>{this.state.dataToSubmit.selectedDoctor}</h2>
                                <h3>Available Dates</h3>
                                <hr style={{width : '17%', marginTop: '-12px'}} />
                                <br />
                                <button onClick = {(event) => this.dateChecker(event)} className={classes.bookingBtn}>Check Availability</button>
                                <br />
                                <div style={{display: 'flex', justifyContent: 'center'}}>{dates}</div>
                                <h3>Visiting Time</h3>
                                <hr style={{width : '17%', marginTop: '-12px'}} />
                                <br />
                                <div>
                                    <select onChange = {(event) => this.timeHandler(event)} className={classes.time}>
                                        <option>Morning</option>
                                        <option>Evening</option>
                                        <option>Night</option>
                                    </select>
                                </div>
                                <h3>Available Slots</h3>
                                <hr style={{width : '17%', marginTop: '-12px'}} />
                                <br />
                                <button onClick = {(event) => this.slotChecker(event)} className={classes.bookingBtn}>Check Availability</button>
                                <div style={{display: 'flex', justifyContent: 'center'}}>{slots}</div>
                                <br />
                                <br />
                            </form>
                    </div>
            );
        }
        let content = (
            <div className={classes.container}>
                    <div className={classes.navigation}>
                        <div className={classes.navigationHolder}><Header properties={this.props}/></div>
                    </div>
                    <div className={classes.mainBody}>
                        <h1>Meet Your Doctor</h1>
                        <p><strong>Choose from the List of Doctor Below : </strong></p>
                        <div className={classes.btnClass}>{this.state.doctorList.map((x, index) => <button key = {index} onClick={() => this.doctorChangeHandler(index)} className={classes.btn}>{x.name}</button>)}</div>
                        {doctorInfo}
                        {doctorForm}
                        <br />
                        {this.state.dataToSubmit.slot ? <button onClick = {(event) => this.openCheckOutForm(event)} className={classes.bookingBtn}>Proceed</button> : null}
                        {
                            this.state.checkoutFlag ?
                                <div>
                                    <h3>Doctor : {this.state.dataToSubmit.selectedDoctor}</h3>
                                    <h3>Date : {this.state.dataToSubmit.date}</h3>
                                    <h3>Time : {this.state.dataToSubmit.time}</h3>
                                    <h3>Slot : {this.state.dataToSubmit.slot}</h3>
                                </div> :
                            null
                        }
                        {this.state.checkoutFlag ? <button onClick = {(event) => this.dataSubmitHandler(event)} className={classes.bookingBtn}>Book Appointment</button> : null}
                    </div>
                </div>
        );
        if(this.state.spinner){
            content = <Spinner />
        }
        return(
            <div>
                {content}
                {submitMessage}
            </div>
        )
    }
}

export default Meet;