import { configureStore, combineReducers } from '@reduxjs/toolkit'
import autoCompleteReducer from './autoCompleteSlice'

const rootReducer = combineReducers({
  autoComplete: autoCompleteReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
