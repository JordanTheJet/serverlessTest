import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    let businessID = 12000;
    let customersArray = "hi"
                         
    let messagesArray = "hi"
    event.preventDefault();
    const { name, message } = this.state;
    console.log("before axios post")
    await axios.post(
      'https://s4i85hc772.execute-api.us-east-1.amazonaws.com/two/Tier1MarketingPOST',
      {"businessId": businessID,
    "customersArray": customersArray,
    "messagesArray": messagesArray }
    )
    console.log("after axios post")
    ;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}