function createReducer(declaration, initialValue) {
  return function reducerFn(state = initialValue, action) {
    const reducer = declaration[action.type]
    const returned = reducer ? reducer(state, action.payload, action) : state

    return returned
  }
}

export default createReducer
