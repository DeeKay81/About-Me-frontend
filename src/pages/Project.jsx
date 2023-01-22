import React, { Component } from 'react';

import { ShortNav } from '../components/pageSubdivisions/nav/ShortNav.jsx';
import { Projects } from '../components/projects/Projects.jsx';


export default class Project extends Component {
    render() {
        return (
            <>
                <ShortNav />
                <Projects />
            </>
        );
    }
}