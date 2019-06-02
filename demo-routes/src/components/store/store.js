import { createStore } from 'redux'
import reducer from './reducer.js'
import { getState, saveState } from './localStorage.js'

const store = createStore(
    reducer,
    null
  )

store.subscribe(() => {
  const user = JSON.stringify(store.getState().user)
  saveState({"user": user})
  console.log("subscribe is working")
})

export default store