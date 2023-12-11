import React from 'react';
import Main from './pages/main';

export default function App(props) {


  return (
    <Main places={props.places} />
  );
}
