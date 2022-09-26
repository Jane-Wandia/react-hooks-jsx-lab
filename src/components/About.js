import React from "react";
import { image } from "../data/data";
function About() {
  return <div id="about">About
    <h2>About Me</h2>
    <p>My name is jane, I am a software developer based in NAirobi</p>
    <img src={image} alt="I made this" />
  </div>;
}
export default About;
