import { useState } from "react";
import "./about.css";
function About() { 
    return <div className="about-container">
      <h1 className="text-center">¿Quién soy?</h1>
      <div className="row">
        <div className="col-md-3 p-2 container">
          <img src="/public/productos/Foto CV.jpeg" 
        alt="Zapatos de Nike" 
        className="fotoCv"
        />
          </div>      
        <div className="col-md-9 p-1 " >
        <p>Soy un desarrollador web con experiencia en React y Node.js, además tengo formación en C# con .ET framework</p>
        <p>Me encanta crear aplicaciones web interactivas y funcionales.</p>
        <p>Actualmente estoy trabajando en un proyecto de e-commerce para vender zapatillas.</p>
        </div>
      </div>
    </div>;
  }
  export default About;