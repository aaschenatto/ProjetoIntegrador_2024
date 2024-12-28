import './Contato.css'
import React, { useState } from 'react';


export default function Contato() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "96a18e3e-7c12-4645-9c73-21614156bb5d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <>
       <div className='banner'>
          <h1>CONTATE-NOS</h1>
          <img src='../../public/bannerContato.jpg'/>
       </div>
        

       <div className='form'>
      <form onSubmit={onSubmit}>
        <p>Seu Nome</p>
        <input className="name" type="text" name="name" required/>
        <p>Seu Email</p>
        <input className="emaill" type="email" name="email" required/>
        <textarea name="message" required></textarea>

        <button type="submit" className='enviar'>Enviar Mensagem</button>

      </form>
      <span>{result}</span>

    </div>
        
       
    

      </>
    )
  }
  
