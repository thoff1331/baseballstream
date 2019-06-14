import React, { Component } from "react";

class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {
      homeScore: 0,
      awayScore: 0,
      homeHit: 0,
      awayHit: 0,
      homeError: 0,
      awayError: 0,
      balls: 0,
      strikes: 0,
      outs: 0
    };
  }
  componentDidMount() {}
  handleHomeScore = () => {
    this.setState({
      homeScore: this.state.homeScore + 1
    });
  };
  handleAwayScore = () => {
    this.setState({
      awayScore: this.state.awayScore + 1
    });
  };
  handleHomeHit = () => {
    this.setState({
      homeHit: this.state.homeHit + 1
    });
  };
  handleAwayHit = () => {
    this.setState({
      awayHit: this.state.awayHit + 1
    });
  };
  handleHomeError = () => {
    this.setState({
      homeError: this.state.homeError + 1
    });
  };
  handleAwayError = () => {
    this.setState({
      awayError: this.state.awayError + 1
    });
  };
  handleOut = () => {
    this.setState({
      outs: this.state.outs + 1
    });
  };
  handleStrike = () => {
    this.setState({
      strikes: this.state.strikes + 1
    });
  };
  handleBall = () => {
    this.setState({
      balls: this.state.balls + 1
    });
  };
  handleResetAll = () => {
    this.setState({
      homeScore: 0,
      awayScore: 0,
      homeHit: 0,
      awayHit: 0,
      homeError: 0,
      awayError: 0,
      balls: 0,
      strikes: 0,
      outs: 0
    });
  };
  handleResetCount = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };
  handleResetOuts = () => {
    this.setState({
      outs: 0
    });
  };
  render() {
    return (
      <div className="scoreboard-background">
        <div className="scoreboard-container">
          <div className="innings-numbers">
            <div>
              <h1>1</h1>
            </div>
            <div>
              <h1>2</h1>
            </div>
            <div>
              <h1>3</h1>
            </div>
            <div>
              <h1>4</h1>
            </div>
            <div>
              <h1>5</h1>
            </div>
            <div>
              <h1>6</h1>
            </div>
            <div>
              <h1>7</h1>
            </div>
            <div>
              <h1>8</h1>
            </div>
            <div>
              <h1>9</h1>
            </div>
            <div>
              <h1>H</h1>
            </div>
            <div>
              <h1>R</h1>
            </div>
            <div>
              <h1>E</h1>
            </div>
          </div>
          <h1>ATL</h1>
          <div className="inning-runs">
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>{this.state.homeScore}</h1>
            <h1>{this.state.homeHit}</h1>
            <h1>{this.state.homeError}</h1>
          </div>
          <h1>LAD</h1>
          <div className="inning-runs">
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>X</h1>
            <h1>{this.state.awayScore}</h1>
            <h1>{this.state.awayHit}</h1>
            <h1>{this.state.awayError}</h1>
          </div>
          <div>
            <h1>Outs:{this.state.outs}</h1>
            <h1>
              Count: {this.state.balls} {"-"} {this.state.strikes}
            </h1>
          </div>
          <div className="teams">
            <div className="braves-name">
              <h1>Braves</h1>
              <h4>36-29</h4>
            </div>
            <h1>Top First</h1>
            <div className="dodgers-name">
              <h1>Dodgers</h1>
              <h4> 43-22</h4>
            </div>
          </div>
        </div>
        <div className="controller-container">
          <button onClick={this.handleHomeScore}>Home Score +1</button>
          <button onClick={this.handleAwayScore}>Away Score +1</button>
          <button onClick={this.handleOut}>OUTS +1</button>
          <button onClick={this.handleStrike}>STRIKE + 1</button>
          <button onClick={this.handleBall}>BALL + 1</button>
          <button onClick={this.handleHomeHit}>HOME HIT + 1</button>
          <button onClick={this.handleAwayHit}>AWAY HIT + 1</button>
          <button onClick={this.handleHomeError}> HOME ERROR+ 1</button>
          <button onClick={this.handleAwayError}> AWAY ERROR+ 1</button>
          <button onClick={this.handleResetAll}>New Game</button>
          <button onClick={this.handleResetCount}>Reset Count</button>
          <button onClick={this.handleResetOuts}>Reset Outs</button>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
