import * as R from 'ramda'

function actionCreatorFactory(scope, type) {
  const t = `${scope}/${type}`

  function f(payload) {
    return {
      type: t,
      payload,
    }
  }
  f.type = t // intended to be used together with createReducer function
  return f
}

export default R.curryN(2, actionCreatorFactory)
