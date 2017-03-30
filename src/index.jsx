import React from 'react';
import ReactDOM from 'react-dom';
import {QuestionsContainer} from './components/Questions';
import {Route, Router, hashHistory} from 'react-router';
import App from './components/App';
import {ResultContainer} from './components/Result';
import questionnaireReducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  selectedAnswers: {},
  correct: 0,
  incorrect: 0,
  total:0,
  incorrectAnswersList: {}
};
const store = createStore(questionnaireReducer, initialState);

// const routes = <Route component={App}>
//     <Route path="/results" component={ResultContainer} />
//     <Route path="/" component={QuestionsContainer} />
// </Route>;

ReactDOM.render(
  <Provider store={store}>
    <QuestionsContainer></QuestionsContainer>
  </Provider>,
  document.getElementById('app')
);
