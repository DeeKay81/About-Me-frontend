import React, { Component } from 'react';

import { ShortNav } from '../components/pageSubdivisions/nav/ShortNav.jsx';

import ExperiencesList from '../components/experiences/ExperiencesList.jsx';


export default class Experience extends Component {
  render() {
    return (
      <>
        <ShortNav />
        <ExperiencesList />
      </>
      );
  }
}