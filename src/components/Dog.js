import React from 'react';

export default function Dog({ name, age, weight }) {
  // was Dog(props)
  // const dog = {
  //   name: 'New Dog Here',
  //   age: '5',
  //   weight: '75 lbs'  
  // };
  return (
    <dl>
      <dt>Name</dt>
      <dd>{ name }</dd>

      <dt>Age</dt>
      <dd>{ age }</dd>

      <dt>Weight</dt>
      <dd>{ weight}</dd> 

    </dl>
  );
}
