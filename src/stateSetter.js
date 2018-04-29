import * as R from 'ramda'

const stateSetter = lens => (state, payload) => R.set(lens, payload, state)

export default stateSetter
