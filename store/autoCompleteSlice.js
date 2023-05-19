import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  recentSearches: [],
  searchResult: [],
  status: 'idle',
  center: { lat: 3.1474660277202906, lng: 101.69953519998894 },
  isError: false,
}

export const fetchAutoComplete = createAsyncThunk('fetchAutoComplete', async (input) => {
  const url = `http://localhost:3001/api/getAutoComplete?input=${input}`
  const headers = { Accept: 'application/json' }
  const response = await axios.get(url, { headers })
  return response.data
})

export const fetchPlaceDetails = createAsyncThunk('fetchPlaceDetails', async (placeID) => {
  const url = `http://localhost:3001/api/getPlaceDetails?placeID=${placeID}`
  const headers = { Accept: 'application/json' }
  const response = await axios.get(url, { headers })
  return response.data
})

export const autoCompleteSlice = createSlice({
  name: 'autoComplete',
  initialState,
  reducers: {
    setIsError(state, action) {
      state.isError = action.payload
    },
    setRecentSearches(state, action) {
      let list = state.recentSearches
      list.push(action.payload)
      state.recentSearches = list
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAutoComplete.fulfilled, (state, action) => {
      state.searchResult = action.payload.predictions
      state.status = 'idle'
    })
    builder.addCase(fetchPlaceDetails.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPlaceDetails.rejected, (state, action) => {
      state.status = 'idle'
    })
    builder.addCase(fetchPlaceDetails.fulfilled, (state, action) => {
      if (action.payload.status === 'OK') state.center = { lat: action.payload.result.geometry.location.lat, lng: action.payload.result.geometry.location.lng }
      else state.isError = true
      state.status = 'idle'
    })
  },
})

export const { setIsError, setRecentSearches } = autoCompleteSlice.actions

export default autoCompleteSlice.reducer