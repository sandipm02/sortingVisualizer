import { Component, React } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
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

  handleSubmit() {
    console.log("Submit Clicked")
  }



  render() {
    return (


      <div>
        <h1>Array Sorting Algo</h1>

        <select id="dropdownSortingAlgo" onChange={this.handleDropdownChange}>
          <option value="bubblePushing">Bubble Push</option>
          <option value="bubblePushing2">Bubble Push 2</option>
        </select>

        <select id="dropdownArraySize" onChange={this.handleArraySizeChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>

        <button onClick={this.handleSubmit}> Sort </button>
      </div>
    );
  }
}

export default App;
