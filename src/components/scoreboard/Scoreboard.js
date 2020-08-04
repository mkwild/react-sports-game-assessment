import React from 'react'

function ScoreBoard(props) {
                                
    return (
        <div id="scoreboard">
            <div>Scoreboard</div>
            <div id="teamScores">
                <div id="homeScore">
                    <div>Home</div>
                    <div>{props.homeTeamStats.score}</div>
                </div>
                <div id="visitingScore">
                    <div>Visitors</div>
                    <div>{props.visitingTeamStats.score}</div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard