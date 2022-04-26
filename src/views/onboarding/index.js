import React from 'react';
import "./style.scss"
import logo from '../../assets/logo.svg'

function OnBoarding() {
    return (
        <div className='onboarding-wrapper'>
            <div className="logo-wrapper">
                <img src={logo} alt="comeon logo"/>
            </div>
            
        </div>
    );
}

export default OnBoarding;