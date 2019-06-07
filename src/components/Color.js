import React from 'react';
import PropTypes from 'prop-types';

export default function Color({ name, hex, rgb }) {
  return (
    <table>
      <tr>Name: </tr>
      <td>{ name }</td>

      <tr>Hex: </tr>
      <td>{ hex }</td>

      <tr>RGB: </tr>
      <td>{ rgb }</td>
    </table>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired
};
