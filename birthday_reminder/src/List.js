import React from 'react';

const List = ({people}) => {

  return(

    // define component
    <>
      {people.map((person) => {

         // deconstruct object
        const {id, image, name, age } = person;

        return(
        <section key={id} className="person">

        <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>

        </section>
        );

      })}
    
    </>

  );

};

export default List;
