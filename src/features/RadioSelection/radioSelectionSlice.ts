import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface RadioSelectionSliceState {
  value: string | undefined
}

const initialState: RadioSelectionSliceState = {
  value: undefined,
}

export const radioSelectionSlice = createAppSlice({
  name: "RadioSelection",
  initialState,
  reducers: create => ({
    updateRadioSelection: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.value = action.payload
      },
    ),
  }),
  selectors: {
    selectRadioSelection: state => state.value,
  },
})

export const { updateRadioSelection } = radioSelectionSlice.actions

export const { selectRadioSelection } = radioSelectionSlice.selectors
