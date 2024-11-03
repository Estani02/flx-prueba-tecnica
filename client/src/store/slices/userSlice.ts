import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { User } from "@/api/types"

interface UserState {
  users: User[]
  query: Record<string, string>
}

const initialState: UserState = {
  users: [],
  query: {},
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<{ key: string; value: string }>) => {
      state.query[payload.key] = payload.value
    },
    clearQuery: (state, { payload }: PayloadAction<string>) => {
      delete state.query[payload]
    },
  },
})

export const { setQuery, clearQuery } = userSlice.actions

export default userSlice.reducer
