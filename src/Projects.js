import React, { Component } from "react";
import "./Projects.css";
import headphones from "./images/headphones.jpg";
import graph from "./images/dots.png";
import wave from "./images/wave_small.png";
 
class Projects extends Component {
  render() {
  return (
      <div class="project-container">
	<div class="badge-container-left">
	  <div class="badge">
	    <img src={headphones} alt="Marshall headphones on a table" />
	  </div>
	</div>
	<div class="project-description text-right">
	  <h3><a href= "/">Spotify Playlist Generator</a></h3>
	  <div>A set of APIs used to generate Spotify playlists</div>
	</div>
	<div class="project-description text-left">
	  <h3><a href= "/">Correlation Finder</a></h3>
	  <div>Suggests predictive capacity of fields in a csv</div>
	</div>
	<div class="badge-container-right">
	  <div class="badge">
	    <img src={graph} alt="cluster graph" />
	  </div>
	</div>
	<div class="badge-container-left">
	  <div class="ascii-badge">
	    <img src={wave} alt="ASCII art of a mountain with waves"/>
	  </div>
	</div>
	<div class="project-description text-right">
	  <h3><a href= "/">ASCII Image Converter</a></h3>
	  <div>Upload a picture and convert it into ASCII art</div>
	</div>
      </div>
    );
  }
}
 
export default Projects;
