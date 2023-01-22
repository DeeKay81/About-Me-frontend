import React, { Component } from 'react';
import FrontendExperienceService from '../../services/FrontendExperienceService';
import BackendExperienceService from '../../services/BackendExperienceService';

import './Experiences.css';

import { AiFillCheckCircle } from 'react-icons/ai';


export default class FrontendExperiencesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fexperiences: [],
            bexperiences: []
        }
    }

    componentDidMount() {
        FrontendExperienceService.getFrontendExperiences().then((res) => {
            this.setState({fexperiences: res.data});
        });

        BackendExperienceService.getBackendExperiences().then((res) => {
            this.setState({bexperiences: res.data});
        });
    }

    render() {
        return (
            <section id='experience'>
            <h5>These are my</h5>
            <h2>experiences</h2>
            
            <div className="container experience__container">
                
                <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {
                        this.state.fexperiences.map(fexperience => {
                            return (
                            <article key={fexperience.id} className='experience__details '>
                                <AiFillCheckCircle className='experience__details-icon' />
                                <div>
                                    <h4>{fexperience.frontendSkill}</h4>
                                    <small className='text-black-light'>{fexperience.frontendExperience}</small>
                                </div>
                            </article>
                            )
                        })
                        }
                    </div>
                </div>

                <div className='experience__backend'>
                <h3>Backend Development</h3>
                    <div className="experience__content">
                        {
                        this.state.bexperiences.map(bexperience => {
                            return (
                                <article key={bexperience.id} className='experience__details '>
                                    <AiFillCheckCircle className='experience__details-icon' />
                                    <div>
                                        <h4>{bexperience.backendSkill}</h4>
                                        <small className='text-black-light'>{bexperience.backendExperience}</small>
                                    </div>
                                </article>
                            )
                        })
                        }
                    </div>
                </div>

            </div>
            </section>
        )
    }
}