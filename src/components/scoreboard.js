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
      outs: 0,
      commentary: [],
      input: " ",
      firstBase: "",
      secondBase: "",
      thirdBase: "",
      pitcher: "",
      batter: "",
      inning: [
        "Top 1",
        "Bottom 1",
        "Top 2",
        "Bottom 2",
        "Top 3",
        "Bottom 3",
        "Top 4",
        "Bottom 4",
        "Top 5",
        "Bottom 5",
        "Top 6",
        "Bottom 6",
        "Top 7",
        "Bottom 7",
        "Top 8",
        "Bottom 8",
        "Top 9",
        "Bottom 9",
        "Top 10",
        "Bottom 10",
        "Top 11",
        "Bottom 11",
        "Top 12",
        "Bottom 12",
        "Top 13",
        "Bottom 13",
        "Top 14",
        "Bottom 14",
        "Top 15",
        "Bottom 15",
        "Top 16",
        "Bottom 16",
        "Top 17",
        "Bottom 17",
        "Top 18",
        "Bottom 18",
        "Top 19",
        "Bottom 19",
        "Top 20",
        "Bottom 20"
      ],
      index: 8
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
      outs: this.state.outs + 1,
      balls: 0,
      strikes: 0
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
      outs: 0,
      commentary: [],
      input: "",
      index: 0
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
  handleCommentary = e => {
    e.preventDefault();
    this.setState(
      {
        input: this.state.input,
        commentary: [...this.state.commentary, this.state.input]
      },
      () => {
        this.clearInput();
      }
    );
  };
  clearInput = () => {
    this.setState({
      input: " "
    });
  };
  handleBatterChange = () => {
    this.setState({
      batter: this.state.batter
    });
  };
  handlePitcherChange = () => {
    this.setState({
      pitcher: this.state.picther
    });
  };
  handleInningChange = () => {
    this.setState({
      batter: "",
      pitcher: "",
      firstBase: "",
      secondBase: "",
      thirdBase: "",
      balls: 0,
      strikes: 0,
      outs: 0,
      index: this.state.index + 1
    });
  };
  handleNextInning = () => {
    this.setState({
      index: this.state.index + 1
    });
  };
  render() {
    console.log(this.state.batter);
    let index = this.state.index;
    let mapped = this.state.commentary.map((val, index) => {
      return <h3 key={index}>{val}</h3>;
    });
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
          <div className="count-outs">
            <h1>Outs:{this.state.outs <= 3 ? this.state.outs : 3}</h1>
            <h1>
              Count: {this.state.balls <= 3 ? this.state.balls : 3} {"-"}{" "}
              {this.state.strikes <= 2 ? this.state.strikes : 2}
            </h1>
            <div>
              <h1>1B:{this.state.firstBase}</h1>
              <h1>2B:{this.state.secondBase}</h1>
              <h1>3B:{this.state.thirdBase}</h1>
            </div>
            <div>
              <h1>Now Pitching: {this.state.pitcher}</h1>
              <h1>Now Batting: {this.state.batter}</h1>
            </div>
          </div>
          <div className="teams">
            <div className="braves-name">
              <h1>Braves</h1>
              <h4>46-33</h4>
            </div>
            <h1>{this.state.inning[index]}</h1>
            <div className="dodgers-name">
              <h1>Dodgers</h1>
              <h4> 54-26</h4>
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
          <input
            onChange={this.handleChange}
            name="input"
            placeholder="Play-by-Play"
          />
          <button onClick={this.handleCommentary}>commentate</button>

          <input
            onChange={this.handleChange}
            name="batter"
            placeholder="change Batter"
          />

          <input
            onChange={this.handleChange}
            name="pitcher"
            placeholder="Change Pitcher"
          />
          <button onClick={this.handleInningChange}>New Inning</button>
          <button onClick={this.handleNextInning}>Next Inning</button>

          <div className="runners-on-base">
            <input
              onChange={this.handleChange}
              name="firstBase"
              placeholder="Change 1st Base"
            />
            <input
              onChange={this.handleChange}
              name="secondBase"
              placeholder="Change 2nd Base"
            />
            <input
              onChange={this.handleChange}
              name="thirdBase"
              placeholder="Change 3rd Base"
            />
          </div>
        </div>
        <div className="play-by-play">
          <h1 className="play-by-play-header">Last Play</h1>
          <h3 className="commentary"> {mapped} </h3>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
