import { configureStore } from "@reduxjs/toolkit"

import { userApi } from "@/api/userApi"
import modalReducer from "@/store/slices/modalSlice"
import userReducer from "@/store/slices/userSlice"

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    modal: modalReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
