import "./index.css";
 import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";
import React from "react";
import ReactDOM from "react-dom";

const divRoot = document.querySelector("#root");

// ReactDOM.render(<PrimeraApp saludo='Hola, soy Pitote'/>, divRoot);
 ReactDOM.render(<CounterApp />, divRoot);

 //testing
