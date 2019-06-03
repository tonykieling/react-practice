const initialState = {
  user: null
}

const reducer = (state = initialState, action) => {
  console.log("inside reducer")
  const newState = {...state}
  switch(action.type) {
    case("SET_USER"):
      newState.user = action.data
      console.log("newState: ", JSON.stringify(newState))
      break
    case("NO_USER"):
      newState.user = action.data
      break
    default:
      break
  }

  return newState
}

export default reducer