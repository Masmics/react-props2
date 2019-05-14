import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="This Dog" age={5} weight="50 lbs" />
    </>
  );
}
