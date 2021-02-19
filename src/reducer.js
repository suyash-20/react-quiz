let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type == "StartQuiz")
    return [
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type == "NextQuestion")
    return state.filter((nextQtn) => nextQtn.id !== action.payload.id);

  return state;
}
