import * as constants from './constants'
import { fromJS } from 'immutable'

const defalutState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
})

export default (state = defalutState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // imutable 对象的set方法，会结合之前imutable对象的值
      // 和这只的值，返回一个全新的对象
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.data)
    default:
      return state
  }
}