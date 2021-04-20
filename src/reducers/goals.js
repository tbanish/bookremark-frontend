export const goals = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_GOALS':
      return action.payload
    default:
      return state
  }
}
