import { useAppDispatch, useAppSelector } from "../../app/hooks"
import TextArea from "../../ui/TextArea"
import { selectBasicNote, updateBasicNote } from "./basicNoteFieldSlice"

export default function BasicNoteField() {
  const value = useAppSelector(selectBasicNote)
  const dispatch = useAppDispatch()
  return (
    <TextArea
      value={value}
      onChange={e => dispatch(updateBasicNote(e.target.value))}
    />
  )
}
