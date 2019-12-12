import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map(x => x ** 2);

//Map -Create a new array by doing something with each item in an array.
const new1Numbers = numbers.map(x => x * 2);

////Filter - Create a new array by keeping the items that return true.
const new2Numbers = numbers.filter(num => num < 10);
// Reduce - Accumulate a value by doing something to each item in an array.
var new3Number = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

//Find - find the first item that matches from an array.
const new4Number = numbers.find(num => num > 10);

//FindIndex - find the index of the first item that matches.
const new5Number = numbers.findIndex(num => num > 10);
