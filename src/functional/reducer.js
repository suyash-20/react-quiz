import * as actions from "./actionTypes";

let lastId = 0;

function reducer(state = [], action) {
  if (action.type === actions.BEGIN_QUIZ)
    return [
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.NEXT_QUESTION)
    return state.filter((nextQtn) => nextQtn.id !== action.payload.id);

  return state;
}

export default reducer;
