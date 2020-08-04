import React from 'react'

function Team (props) {

    return(
        <div className="team">
            <img src={props.logo} alt={props.name} height="100px" width="100px" />
            <h2>{props.name}</h2>
            <br />
            <p>Shots Taken: {props.stats.shots}</p>
            <p style={{visibility: props.stats.hasShot ? "visible" : "hidden"}}>Shot Percentage: %{Math.round((props.stats.score / props.stats.shots)*100)}</p>
            <br />
            <p>Score: {props.stats.score}</p>
            <br />
            <button onClick={props.shotHandler}>Shoot</button>
        </div>
    )
}

export default Team