import React, { Component } from "react";

class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

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
            <h1>0</h1>
            <h1>0</h1>
            <h1>0</h1>
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
            <h1>0</h1>
            <h1>0</h1>
            <h1>0</h1>
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
          <button>Home Score +1</button>
          <button>Away Score +1</button>
          <button>OUTS +1</button>
          <button>STRIKE + 1</button>
          <button>BALL + 1</button>
          <button>HOME HIT + 1</button>
          <button>AWAY HIT + 1</button>
          <button> HOME ERROR+ 1</button>
          <button> AWAY ERROR+ 1</button>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
