import * as R from 'ramda'
import * as RE from 'recompose'

const wrapWithComponent = R.curryN(2, RE.nest)

export default wrapWithComponent
