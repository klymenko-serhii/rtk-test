import { useAppDispatch, useAppSelector } from "../../app/hooks"
import RadioSelect from "../../ui/RadioSelect"
import {
  selectRadioSelection,
  updateRadioSelection,
} from "./RadioSelectionSlice"

const options = [
  { label: "Option A", value: "Option A" },
  { label: "Option B", value: "Option B" },
  { label: "Option C", value: "Option C" },
]

export default function RadioSelection() {
  const selected = useAppSelector(selectRadioSelection)
  const dispatch = useAppDispatch()
  return (
    <div>
      <RadioSelect
        options={options}
        value={selected}
        onChange={value => dispatch(updateRadioSelection(value))}
      />
    </div>
  )
}
