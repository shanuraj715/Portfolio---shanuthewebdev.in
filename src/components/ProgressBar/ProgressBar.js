import React from 'react'
import './progressbar.css'

function ProgressBar() {
    return (
        <div className="skill-progressbar">
            <div className="progress progress-striped">
                <div className="progress-bar" data-bgclr="red"></div>
            </div>
        </div>
    )
}

export default ProgressBar