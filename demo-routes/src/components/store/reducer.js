const initialState = {
  val: null
}

const reducer = (state = initialState, action) => {
  console.log("inside reducer")
  const newState = {...state}

  return newState
}

export default reducer