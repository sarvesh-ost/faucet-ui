import React, {Component} from 'react';

class ChainSelector extends Component {

  constructor() {
    super();
    this.state = {options: []};
  }

  componentDidMount() {
    this.setState(
      {
        options: [
          {
            name: "Ropsten",
            value: "3"
          },
          {
            name: "1406",
            value: "1406"
          },
          {
            name: "1407",
            value: "1407"
          }
        ]
      }
    );
  }

  render() {

    console.log("this .state", this.state);

    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text"
                 htmlFor="inputGroupSelect01">Select Chain</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01"
                onChange={this.props.onChainSelectorChange}>
          <option selected value="">Choose...</option>
          {
            this.state.options.map(x => <option key={x.value}
                                                value={x.value}>{x.name}</option>)
          }
        </select>
      </div>

    );
  }

}

export default ChainSelector;