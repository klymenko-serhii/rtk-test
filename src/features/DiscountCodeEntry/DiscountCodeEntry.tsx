import { type ChangeEvent, useState } from "react"
import Input from "../../ui/Input"

export default function DiscountCodeEntry() {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    setValue(newVal)
    setError(!/^[A-Z]+[0-9]{1,}$/.test(newVal))
  }

  return (
    <div>
      <Input value={value} onChange={handleChange} />
      {!!error && <div className="text-red-500 text-sm">Invalid code.</div>}
    </div>
  )
}
