import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
    <>
      <Header />
      <Color name="Green" hex="#008000" rgb="0, 128, 0" />  
    </>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired
};
