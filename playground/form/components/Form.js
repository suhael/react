import React from 'react'
import PropTypes from 'prop-types';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("value was changed: " + event.target.value)
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>form text</p>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <label htmlFor="firstname" className="form__label">First Name</label>
                <input type="text" name="firstname" maxLength="30"
                       className="firstname-field form__input order-form__input"/>
                <label htmlFor="lastname" className="form__label">Last Name</label>
                <input type="text" name="lastname" maxLength="30"
                       className="lastname-field form__input order-form__input"/>
                <label htmlFor="email" className="form__label">Email</label>
                <input type="text" name="email" maxLength="30" className="email-field form__input order-form__input"/>
                <label htmlFor="Address" className="form__label">Address</label>
                <input type="text" name="Address" maxLength="30"
                       className="address-field form__input order-form__input"/>
                <button className="c-btn c-btn--primary c-btn--center">
                    <span className="c-btn__switch">Order your free SIM</span>
                </button>
            </form>
        );
    }

}


export default Form;
