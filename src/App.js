import React from 'react';
import './App.css';
import Game from './components/game/Game'
import homeTeamLogo1 from './assets/images/logo1.png'
import visitingTeamLogo1 from './assets/images/logo2.jfif'
import homeTeamLogo2 from './assets/images/logo3.jfif'
import visitingTeamLogo2 from './assets/images/logo4.png'


function App() {
  return (
    <div>
      <Game
        venue="The Moon"
        homeTeam="Bearcats"
          homeTeamLogo={homeTeamLogo1}
          visitingTeam="Dragons"
          visitingTeamLogo={visitingTeamLogo1}
      />
      <Game
        venue="Antarctica"
        homeTeam="The Kinguins"
        homeTeamLogo={homeTeamLogo2}
        visitingTeam="The Sea Lions"
        visitingTeamLogo={visitingTeamLogo2}
      />
    </div>
  )
}

export default App;
