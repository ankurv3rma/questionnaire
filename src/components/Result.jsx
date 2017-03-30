import React, { Component } from 'react';
import '../styles/Result.css';

class Result extends Component {
  render() {
    const correctStyle = {
      height: this.props.correct + "px"
    }
    const incorrectStyle = {
      height: this.props.incorrect + "px"
    }
    return (
      <div>
        <div className="yLabel">
          
        </div>
        <div id="resultContainer" className="row resultContainer">
          <div id="correctAnswers" className="col-md-4 col-sm-4 bar" style={correctStyle}>
            <div className="xLabel">Correct</div>
          </div>
          <div id="incorrectAnswers" className="col-md-4 col-sm-4 bar" style={incorrectStyle}>
            <div className="xLabel">Inorrect</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Result;
