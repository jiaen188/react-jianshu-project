import * as constants from './constants'
import { fromJS } from 'immutable'

const defalutState = fromJS({
  focused: false
})

export default (state = defalutState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // imutable 对象的set方法，会结合之前imutable对象的值
    // 和这只的值，返回一个全新的对象
    return state.set('focused', true)
  } else if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}