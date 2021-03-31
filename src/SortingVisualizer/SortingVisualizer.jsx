import React from 'react';
// import * as sortingAlgorithms from './sortingAlgorithms/sortingAlgorithms';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgo.js'
import './SortingVisualizer.css';
export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
        array:[],
        };
    }
    
    componentDidMount() {
    this.resetArray();
}
    resetArray() {
    const array = [];
    for (let i = 0; i < 400; i++) {
        array.push(randomIntFromInterval(5, 690));
    }
    this.setState({ array });
    }
    mergeSort()
    {
        const javaScriptSortedArray = this.state.array.slice()
            .sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }
    quickSort()
    {
        const javaScriptSortedArray = this.state.array.slice()
            .sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.quickSort(this.state.array);
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }
    heapSort()
    {

    }
    bubbleSort()
    {
        const javaScriptSortedArray = this.state.array.slice()
            .sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.bubbleSort(this.state.array);
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }
    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++)
        {
            const array=[];
            const length = randomIntFromInterval(1, 1000);
            for (let j = 0; j < length; j++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const sortedArray = sortingAlgorithms.bubbleSort(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
        }
    }
    render() {
        const { array } = this.state;
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{height:`${value}px`}}></div>
                ))}
                <button onClick={() => this.resetArray()} id="button">Generate New Array</button>
                <button onClick={() => this.mergeSort()} id="button">Merge Sort</button>
                <button onClick={() => this.quickSort()} id="button">Quick Sort</button>
                <button onClick={() => this.heapSort()} id="button">Heap Sort</button>
                <button onClick={() => this.bubbleSort()} id="button">Bubble Sort</button>
                <button onClick={() => this.testSortingAlgorithms()} id="button">Test
                </button> 
                
            </div>
        );
    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}
function arraysAreEqual(arrayOne, arrayTwo)
{
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}