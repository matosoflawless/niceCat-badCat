/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'


import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import BrushIcon from '@mui/icons-material/Brush';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "./css/CatsCard.css"


function CatsCard(props) {


    const avarageWeight = ((props.data.max_weight + props.data.min_weight) / 2).toFixed(0)
    const avarageLifeExpectency = ((props.data.max_life_expectancy + props.data.min_life_expectancy) / 2).toFixed(0)

    // curiosity
    console.log(0.1 + 0.2)

    return (

        <div className='card-main-container'>
            <div className='cat-images-container'>
                <button className='favorite-button' onClick={() => { props.handleFavourite(props.data) }}>
                    <FavoriteIcon />
                </button>
                <img className='cat-image' src={props.data.image_link} />
            </div>
            <div>
                <p className="cat-name-text">{props.data.name}</p>
                <p className='cat-origin-text'>From: {props.data.origin}</p>
                <div className='cat-weightAndLength-text'>
                    <p>Avarage Weight: {avarageWeight}</p>
                    <p>Length: {props.data.length}</p>
                </div>
                <p className='lifeExpectancy-text'>Average Life Expectancy: {avarageLifeExpectency}</p>
            </div>
            <div className='progress-bars-container'>
                <div className='progress-bar-parent'>
                    <FamilyRestroomIcon sx={{color:"black"}}/>
                    <div className='progress-bar-child' style={{ width: props.data.family_friendly * 10 }}> </div>
                </div>
                <div className='progress-bar-parent'>
                    <HealthAndSafetyIcon sx={{color:"black"}}/>
                    <div className='progress-bar-child' style={{ width: props.data.general_health * 10 }}> </div>
                </div>
                <div className='progress-bar-parent'>
                    <StarPurple500Icon sx={{color:"black"}}/>
                    <div className='progress-bar-child' style={{ width: props.data.playfulness * 10 }}> </div>
                </div>
                <div className='progress-bar-parent'>
                    <ChildFriendlyIcon sx={{color:"black"}} />
                    <div className='progress-bar-child' style={{ width: props.data.children_friendly * 10 }}> </div>
                </div>
                <div className='progress-bar-parent'>
                    <BrushIcon sx={{color:"black"}}/>
                    <div className='progress-bar-child' style={{ width: props.data.grooming * 10 }}> </div>
                </div>
                <div className='progress-bar-parent'>
                    <PsychologyIcon sx={{color:"black"}}/>
                    <div className='progress-bar-child' style={{ width: props.data.intelligence * 10 }}> </div>
                </div>
                <div className='progress-bar-parent'>
                    <PetsIcon sx={{color:"black"}}/>
                    <div className='progress-bar-child' style={{ width: props.data.other_pets_friendly * 10 }}> </div>
                </div>
            </div>

        </div>

    )
}

export default CatsCard