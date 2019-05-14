import React from 'react';

export default function Color({ name, hex, rgb }) {
// left off: if name isn't passed, default to hex value
// use it in App
// render App in index.js
  return (
    <dl>
      <dt>Name: </dt>
      <dd>{ name }</dd>

      <dt>Hex: </dt>
      <dd>{ hex }</dd>

      <dt>RGB: </dt>
      <dd>{ rgb }</dd> 

    </dl>
  );
}
