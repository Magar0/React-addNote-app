import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";


const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App/>
)


// ReactDOM.render(<><h1>Testing phase 1</h1>
// <h3>testin 2 secondTesting</h3></>,
// document.getElementById("root"))    




// const h1 = document.createElement("h1")
// h1.innerHTML= "Testing Phase"
// document.getElementById("root").append(h1)


// const p = document.createElement("p")
// p.innerHTML= "Testing Phase all details available here"
// document.getElementsByTagName("h1")[0].append(p)