// Example usage:
//
// const scope = 'PAGE1_PAGE'
// const scopedFactory = actionCreatorFactory(scope)
//
// const incrementAction = scopedFactory('INCREMENT')
//
// const initialState = 0
//
// const actionsMap = {
//   [incrementAction.type]: (state, payload, action) => state + 1
// }
//
// const rootReducer = {
//   page1: createReducer(page1ActionsMap, page1InitialState)
// }

function createReducer(declaration, initialValue) {
  return function reducerFn(state = initialValue, action) {
    const reducer = declaration[action.type]
    const returned = reducer ? reducer(state, action.payload, action) : state

    return returned
  }
}

export default createReducer
