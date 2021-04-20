export const goals = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_GOALS':
      return action.payload
    case 'ADD_GOAL':
      return [action.payload]
    case 'UPDATE_GOAL':
      return [action.payload]
    case 'DELETE_GOAL':
      return state.filter(goal => goal.id !== action.payload)
    default:
      return state
  }
}
