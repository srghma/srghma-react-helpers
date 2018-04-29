import * as R from 'ramda'

const allTypesOfArr = R.map(R.prop('type'))
const allTypes = R.unapply(allTypesOfArr)

export default allTypes
