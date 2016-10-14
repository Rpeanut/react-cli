import { combineReducers } from 'redux'
import { hello } from '../actions'

function visited(state = 'no', { type }) {
  switch (type) {
    case hello.VISITE_HELLO:
      return 'yes'

    default:
      return state
  }
}

export default combineReducers({
  visited
})
