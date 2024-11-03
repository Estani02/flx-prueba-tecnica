import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { type User } from "@/api/types"

type ModalName = "add" | "edit" | "delete"

interface ModalState {
  isModalOpen: {
    add: boolean
    edit: boolean
    delete: boolean
  }
  selectedUser: User | null
}

const initialState: ModalState = {
  isModalOpen: {
    add: false,
    edit: false,
    delete: false,
  },
  selectedUser: null,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<{ modalName: ModalName; user?: User }>) => {
      state.isModalOpen[action.payload.modalName] = true
      state.selectedUser = action.payload.user ?? null
    },
    hideModal: (state, action: PayloadAction<ModalName>) => {
      state.isModalOpen[action.payload] = false
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer
