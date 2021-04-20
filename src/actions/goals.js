export const loadGoals = () => {
  return dispatch => {
    fetch('http://localhost:3001/goals')
      .then(resp => resp.json())
      .then(goals => {
        dispatch({type: 'LOAD_GOALS', payload: goals.data})
      })
  }
}

export const addGoal = (goal) => {
  return dispatch => {
    const body = {
      total: goal
    }
    fetch('http://localhost:3001/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(newGoal => {
        dispatch({type: 'ADD_GOAL', payload: newGoal.data})
      })
  }
}

export const updateGoal = (goal, id) => {
  return dispatch => {
    const body = {
      total: goal
    }
    fetch(`http://localhost:3001/goals/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(updatedGoal => {
        dispatch({type: 'UPDATE_GOAL', payload: updatedGoal.data})
      })
  }
}
