import { Component, React } from 'react'
import { bubblePush } from './scripts/bubblePushing'


class App extends Component {

  constructor() {
    super();
    this.state = {
      arraySize: "10",
      sortMethod: "bubblePushing",
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleArraySizeChange = this.handleArraySizeChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ sortMethod: e.target.value });
  }

  handleArraySizeChange(e) {
    this.setState({ arraySize: e.target.value });
  }

  handleNonDefaultState() {
    this.setState({ default: false });
  }

  render() {
    if(this.state.sortMethod === "bubblePushing") {
      bubblePush(this.state.arraySize);
    }

    if(this.state.sortMethod === "bubblePushing2") {
      console.log("transition is working")
    }

    return (
      <div>
        <h1>Array Sorting Algo</h1>

        <select id="dropdownSortingAlgo" onChange={this.handleDropdownChange}>
          <option  value="bubblePushing">Bubble Push</option>
          <option value="bubblePushing2">Bubble Push 2</option>
        </select>

        <select id="dropdownArraySize" onChange={this.handleArraySizeChange}>
          <option  value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>

        <h1>{this.state.sortMethod}</h1>
        <h1>{this.state.arraySize}</h1>
      </div>
    );
  }
}

export default App;
