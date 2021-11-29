import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor() {
    super();

    this.state = {
      sortedRankingArray: [],
    };

    this.setRankingArray = this.setRankingArray.bind(this);
  }

  componentDidMount() {
    this.setRankingArray();
  }

  setRankingArray() {
    const rankingArray = JSON.parse(localStorage.getItem('ranking'));
    const sortedRankingArray = rankingArray
      .sort((playerA, playerB) => playerB.score - playerA.score);
    this.setState({ sortedRankingArray });
  }

  render() {
    const { sortedRankingArray } = this.state;

    return (
      <div id="rankingPage">
        <h1 data-testid="ranking-title">Tela de Ranking</h1>
        <div id="rankingContainer">
          {sortedRankingArray.map((microObj, index) => (
            <div id="eachRankingPosition" key={ index }>
              <img src={ microObj.picture } alt="Foto do jogador" />
              <span data-testid={ `player-name-${index}` }>
                {microObj.name}
              </span>
              <output data-testid={ `player-score-${index}` }>
                {Number(microObj.score)}
              </output>
            </div>
          ))}
        </div>
        <Link
          to="/"
        >
          <button
            data-testid="btn-go-home"
            type="button"
          >
            Jogar Novamente
          </button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
