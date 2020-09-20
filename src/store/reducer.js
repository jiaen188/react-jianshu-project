const defalutState = {
  focused: false
}

export default (state = defalutState, action) => {
  if (action.type === 'search_focus') {
    return {
      focused: true
    }
  } else if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state
}