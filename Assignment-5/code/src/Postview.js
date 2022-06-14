import React from 'react';
import './Postview.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';



const Postview=()=> {
  
const [items, setItems] = useState([]);
  
 
  useEffect(() => {
    
    fetch("http://localhost:3004/user")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        )
    }, [])
          
    
    return (
      <>
      
      <div className="site-container">
        <Header/>
        {items.map((e)=>
        <Card details={e}/>
        )}
      </div>
        
      </>
    );
  }
  
  export default Postview;
       
        

