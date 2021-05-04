import React from 'react';

// import external data file
import data from './data';



const List = () => {


  // set useState for birthday data
  const [birthdayList, setBirthdayList] = React.useState(data);

  return (
    <>
    <div className="container">
    <h3>{birthdayList.length} Birthdays Today</h3>
    
    {birthdayList.map((birthdays) => {

      return <section className="person" key={birthdays.id}>

      <img src={birthdays.image} alt="birthday profile"/>
      <div>
      <h4>{birthdays.name}</h4>
      <p>{birthdays.age} years</p>
      </div>
    
      </section>
 
   
    })}
    
  <button onClick={() => setBirthdayList([])}> Clear All</button>
  </div>
    </>
  );
};

export default List;
