function updateSelection(state, option, name){
  const selectedAnswers = Object.assign({}, state.selectedAnswers, {[name]: option});
  return Object.assign({}, state, {selectedAnswers});
}

function addAnswer(state, questionKey){
  const selectedAnswers = Object.assign({}, state.selectedAnswers, {[questionKey]: ""});
  const incorrectAnswersList = Object.assign({}, state.incorrectAnswersList, {[questionKey]: ""});
  return Object.assign({}, state, {selectedAnswers}, {incorrectAnswersList});
}

function resetAnswers(state){
  const selectedAnswers = {};
  const questionKeys = Object.keys(state.selectedAnswers);
  questionKeys.map((key) => {
    selectedAnswers[key] = "";
  })
  return Object.assign({}, state, {selectedAnswers}, {correct:0}, {incorrect:0});
}

function setAnswerCount(state, correct, incorrect){
  const total = correct + incorrect;

  let totalHeight = document.getElementById('resultContainer').clientHeight;
  var correctHeight = (totalHeight / total) * correct;
  var incorrectHeight = (totalHeight / total) * incorrect;
  return Object.assign({}, state, {correct:correctHeight}, {incorrect:incorrectHeight}, {total:total});
}

function markIncorrect(state, questionKey, className){
  const incorrectAnswersList = Object.assign({}, state.incorrectAnswersList, {[questionKey]: className});
  return Object.assign({}, state, {incorrectAnswersList});
}

const questionnaireReducer = function(state = {}, action){
  switch(action.type){
    case 'UPDATE_SELECTION':
      return updateSelection(state, action.option, action.name);
    case 'RESET_ANSWERS':
      return resetAnswers(state);
    case 'ADD_ANSWER':
      return addAnswer(state, action.questionKey);
    case 'SET_COUNT':
      return setAnswerCount(state, action.correct, action.incorrect);
    case 'MARK_INCORRECT':
      return markIncorrect(state, action.questionKey, action.className);
    default:
      return state;
  }
}

export default questionnaireReducer
