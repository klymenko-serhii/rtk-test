import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface BasicNoteFieldSliceState {
  value: string
}

const initialState: BasicNoteFieldSliceState = {
  value: "",
}

export const basicNoteFieldSlice = createAppSlice({
  name: "BasicNoteField",
  initialState,
  reducers: create => ({
    updateBasicNote: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload
    }),
  }),
  selectors: {
    selectBasicNote: state => state.value,
  },
})

export const { updateBasicNote } = basicNoteFieldSlice.actions

export const { selectBasicNote } = basicNoteFieldSlice.selectors
