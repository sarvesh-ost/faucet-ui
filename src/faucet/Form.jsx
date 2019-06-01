import React, {Component} from 'react';
import axios from 'axios';

import ChainSelector from "./ChainSelector";
import Message from "./Message";

class FaucetForm extends Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChainSelectorChange = this.onChainSelectorChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.request = {};
    this.state = {error: "", success: ""}
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted ", this.request);
    if (!this.request.chain || this.request.chain.trim().length === 0) {
      this.setState({error: "Select a chain"});
      return;
    } else if (!this.request.address || this.request.address.length !== 42) {
      this.setState({error: `Invalid Address ${this.request.address ? this.request.address : ""}`});
      return;
    }

    const oThis = this;

    const body = {
      beneficiary: `${this.request.address}@${this.request.chain}`
    };

    console.log("body  ", body);
    axios({
      method: 'post',
      url: 'http://157.230.99.224:60500',
      crossdomain: true,
      data: body,
      headers: {
        "Content-Type":"text/json",
        'Access-Control-Allow-Origin': '*',
      }

    })
      .then(function (response) {
        oThis.setState({
          error: "",
          success: `Funding request received txHash:${response.data.txHash}`
        });
      })
      .catch(function (error) {
        oThis.setState({error: error.toString(), success: ""});
      })
  };

  onChainSelectorChange(event) {
    console.log("event on chain change ", event.target.value);
    this.request = {
      ...this.request,
      chain: event.target.value,
    };
    this.setState({error: "", success: ""});
  };

  onAddressChange(event) {
    console.log("event on chain change ", event.target.value)
    this.request = {
      ...this.request,
      address: event.target.value,
    };
    this.setState({error: "", success: ""});
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-sm">
              <Message error={this.state.error} success={this.state.success}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <ChainSelector
                onChainSelectorChange={this.onChainSelectorChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <input type="text" className="form-control input-group mb-3"
                     onChange={this.onAddressChange}
                     id="inputAddress"
                     placeholder="Enter ethereum address"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <button type="submit" onClick={this.onSubmit}
                      className="btn btn-primary">Fund
              </button>
            </div>
          </div>
        </div>
      </form>

    );
  }
}

export default FaucetForm;