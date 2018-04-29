import * as R from 'ramda'

// ((k, v) -> a) -> {k: v} -> [a]
function zipEachKeyVal(func, obj) {
  return R.pipe(R.toPairs, R.map(R.apply(func)))(obj)
}

export default R.curryN(2, zipEachKeyVal)
