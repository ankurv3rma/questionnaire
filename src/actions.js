export function updateSelection(event){
  return {
    type: 'UPDATE_SELECTION',
    option: event.target.value,
    name: event.target.name
  };
}

export function resetAnswers(){
  return {
    type: 'RESET_ANSWERS'
  }
}

export function addAnswer(questionKey){
  return {
    type: 'ADD_ANSWER',
    questionKey
  }
}

export function setAnswerCount(correct, incorrect){
  return {
    type: 'SET_COUNT',
    correct,
    incorrect
  }
}

export function markAnswer(questionKey, className){
  return {
    type: 'MARK_INCORRECT',
    questionKey,
    className
  }
}
