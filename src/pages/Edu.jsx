import React, { Component } from 'react';

import { ShortNav } from '../components/pageSubdivisions/nav/ShortNav.jsx';
import { Education } from '../components/education/Education';


export default class Edu extends Component {
    render() {
        return (
            <>
                <ShortNav />
                <Education />
            </>
        );
    }
}