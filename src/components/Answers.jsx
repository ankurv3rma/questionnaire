import React from 'react';
import '../styles/Answers.css';

class Answers extends React.PureComponent {
  componentWillMount(){
    this.props.actions.addAnswer(this.props.name);
  }

  getAnswer(){
    return this.props.selectedAnswers[this.props.name];
  }

  render(){
    return (
      <div className="answers">
        <select className="form-control" name={this.props.name} onChange={this.props.actions.updateSelection} value={this.getAnswer()} required>
          <option value="" disabled>Select something...</option>
          {this.props.optionsList.map( (option, index) =>
            <option key={index} value={option}>
              {option}
            </option>
          )}
        </select>
      </div>
    );
  }
}

export default Answers;
