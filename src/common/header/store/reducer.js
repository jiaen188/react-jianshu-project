import * as constants from './constants'

const defalutState = {
  focused: false
}

export default (state = defalutState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true
    }
  } else if (action.type === constants.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state
}