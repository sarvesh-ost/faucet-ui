import React, {Component} from 'react';

class Message extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    let message, show = false, className;

    const error = this.props.error;
    const success = this.props.success;

    if (error && error.trim().length > 0) {
      show = true;
      message = error;
      className = "alert alert-danger";
    } else if (success && success.trim().length > 0) {
      show = true;
      message = success
      className = "alert alert-success";
    } else {
      show = false;
    }

    const output = show && show === true ?
      <div className={className} role="alert">
        {message}
      </div> : "";
    return output;

  }
}

export default Message;