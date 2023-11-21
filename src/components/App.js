import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
const name = user.name
const color = user.color
const city = user.city
console.log(name)

function App() {
  return (
    <div>
      <NavBar />
      <Home name = {name} color = {color} city = {city}/>
      <About bio = "I made this!" github = 'https://github.com/liza' linkedin='https://www.linkedin.com/in/liza/'/>
    </div>
  );
}

export default App;
