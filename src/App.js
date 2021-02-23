import { Component, React } from 'react'
import './style/style.css'

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

  componentDidMount() {
    console.log(this.chartReference);
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
    let arraySize = this.state.arraySize;
    let min = 1;
    let max = 100;

    let array = [arraySize];
    let sortedArray = [arraySize];

    generateArray();

    function generateArray() {
      for (var i = 0; i < arraySize; i++) {
        array[i] = generateArrayValue(min, max);
        if (array[i] === array[i - 1]) {
          array[i] = generateArrayValue(min, max);
        }
      }
    }

    function generateArrayValue(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    bubbleSort();

    function bubbleSort() {
      sortedArray = Array.from(array);

      for (var i = 0; i < arraySize; i++) {
        for (var j = 0; j < arraySize - 1; j++) {
          if (sortedArray[j] > sortedArray[j + 1]) {
            let x = sortedArray[j];
            sortedArray[j] = sortedArray[j + 1];
            sortedArray[j + 1] = x;
          }
        }
      }
    }

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
      </div>


    );
  }
}

export default App;
