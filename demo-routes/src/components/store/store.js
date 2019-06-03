import { createStore } from 'redux'
import reducer from './reducer.js'
import { getState, saveState } from './localStorage.js'

const persistedData = getState()
console.log("persistedData: ", persistedData)

const store = createStore(
    reducer,
    persistedData
  )

store.subscribe(() => {
  const user = JSON.stringify(store.getState())
console.log("user:: ", user)  
  saveState(user)
  console.log("subscribe is working")
})

export default store