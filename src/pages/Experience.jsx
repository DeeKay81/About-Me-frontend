import React, { Component } from 'react';

import { ShortNav } from '../components/pageSubdivisions/nav/ShortNav.jsx';
import { Experiences } from '../components/experiences/Experiences.jsx';


export default class Experience extends Component {
  render() {
    return (
      <>
        <ShortNav />
        <Experiences />
      </>
      );
  }
}