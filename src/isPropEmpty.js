import * as R from 'ramda'

function isPropEmpty(prop, obj) {
  return !R.prop(prop, obj)
}

export default R.curryN(2, isPropEmpty)
