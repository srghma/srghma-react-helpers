import * as R from 'ramda'

const mapSelectors = (spec, state) => R.map(selector => selector(state), spec)

export default R.curryN(2, mapSelectors)
