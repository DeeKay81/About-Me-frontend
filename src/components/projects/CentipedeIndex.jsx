import React, { Component } from 'react';
import Page from '../../projects/Centepede/index.html';

let htmlDoc = {__html: Page};

export default class CentipedeIndex extends Component {
  render(){
     return (<div dangerouslySetInnerHTML={htmlDoc} />)
}}
