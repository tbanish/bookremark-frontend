export const loadGoals = () => {
  return dispatch => {
    fetch('http://localhost:3001/goals')
      .then(resp => resp.json())
      .then(goals => {
        dispatch({type: 'LOAD_GOALS', payload: goals.data})
      })
  }
}
