import React, { useState } from 'react';

// import color component
import Color from './Color';

// import values.js api for color selection
import Values from 'values.js';

function App() {

  const [color, setColor] = useState('');

  const [error, setError] = useState(false);

  const [colorList, setColorList] = useState([]);

  // function to handle the users input
  const handleSubmit = (e) =>{

    e.preventDefault();
    
    // check if the value is valid
    try{
    
      let colors = new Values(color).all(10);
      setColorList(colors);

    } catch(error){

      setError(true);
      console.log(error);

    }


  }

  return (
   
    <>
      
    <h2>Color Palette Generator</h2>
    
  {/* form for color chosen by user */}
    <section className="container">

    <form onSubmit={handleSubmit}>

      <input type="text" value={color} onChange={(e) =>setColor(e.target.value)} placeholder="#87a7ca" className={`${error ? 'error' : null}`}/>

    <button type="submit" className="btn">Submit</button>
    </form>

    {/* Display color results */}
    </section>
    <section className="colors">
      {colorList.map((color, index)=> {
        
        return <Color key={index} {...color} index={index} hexColor = {color.hex}/>

      })}
     

    </section>

    </>
  );
}

export default App;
