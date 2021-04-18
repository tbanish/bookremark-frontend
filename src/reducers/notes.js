export const notes = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_NOTES':
      const notes = []
      for (const element of action.payload) {
        notes.push(element.attributes.notes)
      }
      return notes.flat()
    default:
      return state
  }
}
