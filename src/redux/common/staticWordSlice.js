import { createSlice } from '@reduxjs/toolkit'
import { getAllStaticWords } from '@/api/services/staticWords'

const initialState = {
  allWords: {
    data: [],
    loading: true,
  },
}

const allStaticWordsSlice = createSlice({
  name: 'legislations',
  initialState,
  reducers: {
    setAllStaticWords: (state, { payload }) => {
      state.allWords = { ...state.allWords, ...payload }
    },
  },
})

export const getAllStaticWordsAsync = () => async (dispatch) => {
  try {
    dispatch(setAllStaticWords({ loading: true }))
    const response = await getAllStaticWords()
    if (response) {
      dispatch(
        setAllStaticWords({
          data: response,
          loading: false,
        })
      )
    }
  } catch (error) {
    console.log(error)
    dispatch(setAllStaticWords({ loading: false }))
  } finally {
    dispatch(setAllStaticWords({ loading: false }))
  }
}

export const { setAllStaticWords } = allStaticWordsSlice.actions

export default allStaticWordsSlice.reducer
