import React from 'react'
import Team from '../team/Team'
import ScoreBoard from '../scoreboard/Scoreboard'
import ScoreAudio from '../../assets/audio/score.wav'
import MissAudio from '../../assets/audio/miss.wav'

class Game extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            venue: this.props.venue,
            homeTeam: this.props.homeTeam,
            homeTeamLogo: this.props.homeTeamLogo,
            visitingTeam: this.props.visitingTeam,
            visitingTeamLogo: this.props.visitingTeamLogo,
            HomeTeamStats: {
                shots: 0,
                score: 0,
                hasShot: false
            },
            VisitingTeamStats: {
                shots: 0,
                score: 0,
                hasShot: false
            },
            resetCount: 0
        }

        this.scoreAudio = new Audio({ScoreAudio})
        this.missAudio = new Audio({MissAudio})
    }

    shotHandler = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let score = this.state[teamStatsKey].score
        if (Math.random() >= 0.5) {
            score++
            this.scoreAudio.play()
        }
        else {
            this.missAudio.play()
        }
        this.setState((state, props) => ({
            [teamStatsKey] : {
                shots: state[teamStatsKey].shots + 1,
                score,
                hasShot: true
            },
        }))
    }

    resetHandler = (event) => {
        this.setState((state, props) => ({
            HomeTeamStats: {
                shots: 0,
                score: 0,
                hasShot: false
            },
            VisitingTeamStats: {
                shots: 0,
                score: 0,
                hasShot: false
            },
            resetCount: state.resetCount + 1
        }))
    }

    render(props) {
        return (
            <div id="game">
                <h1>Welcome to {this.state.venue}!</h1>
                <div id="main">
                    <div id="team1">
                        <Team
                            name={this.state.homeTeam}
                            logo={this.state.homeTeamLogo}
                            stats={this.state.HomeTeamStats}
                            shotHandler={() => this.shotHandler("Home")}
                        />
                    </div>
                    <div id="versus">
                        <h3>VS</h3>
                        <div>
                            <strong>Resets:</strong> {this.state.resetCount}
                        </div>
                        <button onClick={this.resetHandler}>Reset</button>
                        <ScoreBoard
                            homeTeamStats={this.state.HomeTeamStats}
                            visitingTeamStats={this.state.VisitingTeamStats} />
                    </div>
                    <div id="team2">
                        <Team
                            name={this.state.visitingTeam}
                            logo={this.state.visitingTeamLogo}
                            stats={this.state.VisitingTeamStats}
                            shotHandler={() => this.shotHandler("Visiting")}
                        />
                    </div>
                </div>
                <div id="empty"></div>
            </div>
        )
    }
}

export default Game