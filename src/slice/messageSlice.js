import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: [
    {
      type: 'success',
      title: '更新',
      text: '更新成功!'
    }
  ]
})

export default messageSlice.reducer
