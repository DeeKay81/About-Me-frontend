// let centipedeIndexFile = require('../../../src/cindex.html');

// export default function CentipedeIndex() {

//     return (
//         <div dangerouslySetInnerHTML={ {__html: centipedeIndexFile} } />
//     );
// }

import React, { Component } from 'react';
import Page from '../../projects/Centepede/index.html';
var htmlDoc = {__html: Page};

export default class CentipedeIndex extends Component {
  constructor(props){
    super(props);
  }

  render(){
     return (<div dangerouslySetInnerHTML={htmlDoc} />)
}}
