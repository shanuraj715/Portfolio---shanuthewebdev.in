import React from 'react'
import './skillcard.css'

import data from '../../data'

import Card from '../../components/SkillCard/SkillCard'
import { Heading } from '../../components/Index'

function SkillCard() {

    return (<>
        <div className="container" id="skills">
        <Heading>My Skills</Heading>
            <div className="skill-card-container">
                {data.skills.map((item, index) => <Card icon={item.path}
                    iconTitle={item.iconTitle}
                    classes={item.classes}
                    key={index}
                    rating={ item.rating }
                    aosAnimName={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
                    />)}
            </div>
        </div>
    </>
    )
}

export default SkillCard