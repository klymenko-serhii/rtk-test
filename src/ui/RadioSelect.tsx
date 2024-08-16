type Props = {
  options: { label: string; value: string }[]
  value: string | undefined
  onChange: (value: string) => void
}
export default function RadioSelect({ options, value, onChange }: Props) {
  return (
    <div className="flex gap-4">
      {options.map(option => (
        <label
          key={option.value}
          className="cursor-pointer flex items-center gap-2"
        >
          <input
            type="radio"
            checked={value === option.value}
            onChange={() => {
              if (value !== option.value) onChange(option.value)
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}
