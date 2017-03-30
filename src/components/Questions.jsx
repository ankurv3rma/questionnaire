import React, { PropTypes, Component } from 'react';
import Answers from './Answers';
import { connect } from 'react-redux';
import qData from '../data/data';
import * as Actions from '../actions';
import {bindActionCreators} from 'redux';
import Result from './Result';
import '../styles/Questions.css'

class Questions extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let correctAnswers=0, incorrectAnswers=0;
    let self = this;
    qData.questions.map( (questionObject) => {
      if(questionObject.correctAnswer === self.props.selectedAnswers['question' + questionObject.id]) {
        correctAnswers++;
        this.props.actions.markAnswer('question' + questionObject.id, "");
      }
      else {
        incorrectAnswers++;
        this.props.actions.markAnswer('question' + questionObject.id, "incorrectAnswer");
      }
    });
    this.props.actions.setAnswerCount(correctAnswers, incorrectAnswers);
    //this.props.router.push('/results');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>{qData.title}</h1>
        </div>
        <div className="row">
          <div className="col-md-6 questionnaire" >
            <form onSubmit={this.handleSubmit} id="questionnaire">
              <div className="row">
                {qData.questions.map((questionObject, index) =>
                  <div key={index} className={"questionContainer " + this.props.incorrectAnswersList['question' + questionObject.id]}>
                    <div className="question">{questionObject.id + '. ' + questionObject.question}</div>
                    <Answers
                      optionsList={questionObject.answers}
                      name={'question' + questionObject.id}
                      selectedAnswers={this.props.selectedAnswers}
                      actions={this.props.actions}
                      isUnanswered={this.isUnanswered}>
                      </Answers>
                  </div>
                )}
                </div>
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <input type="submit" className="btn btn-default btn-lg col-md-5" value="Submit"></input>
                    <button className="btn btn-default btn-lg col-md-5 col-md-offset-2" onClick={this.props.actions.resetAnswers} type="button">Clear</button>
                  </div>
                </div>
            </form>
          </div>
          <div className="col-md-5 col-md-offset-1">
            <Result correct={this.props.correct} incorrect={this.props.incorrect} total={this.props.total}></Result>
          </div>
        </div>
      </div>
    );
  }
}

Questions.propTypes = {
  selectedAnswers: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    selectedAnswers: state.selectedAnswers,
    correct: state.correct,
    incorrect: state.incorrect,
    total: state.total,
    incorrectAnswersList: state.incorrectAnswersList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export const QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

export default Questions;
