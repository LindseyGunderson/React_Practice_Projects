import React, { useState } from 'react';

// import external data file
import data from './data';

import List from './List';
function App() {

  // set data from external js to people variable
  const [people, setPeople] = useState(data);

  return(
    <main>
      
      <section>
        <div className="container">
          <h3>{people.length} Birthdays Today</h3>

          {/* import List component */}
          <List people={people}/>
        
        {/* set function to empty array to clear all birthdays */}
        <button onClick={() => setPeople([])}> Clear All</button>
        
        </div>
      </section>
      
    </main>
    )}

export default App;
