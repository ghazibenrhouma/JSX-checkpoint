import React from 'react';
import './App.css';
import image1 from '../src/image1.jpg';
import '../src/style.css';

function App() {
  const styleDiv = {
    border: "solid 1px black",
    maxWidth: "100vw",
  };
  const styleImg = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%"
  };
  return (
    <>
    <div style = {styleDiv}>
      <h1 className="title red">Ghazi BEN RHOUMA</h1>
      <br/>
      <img src = "image2.jpg" style = {styleImg} />
      <br/>
      <img src = {image1} style = {styleImg} />
    </div>
    <video width = "320" height = "240" controls>
      <source src="vidéo.webm" type="video/mp4"/>
    </video>
    </>
  );
}

export default App;
