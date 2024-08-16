import Button from "../../ui/Button"

export default function CodeGenerator() {
  return (
    <div>
      <Button
        onClick={() =>
          alert(`NEWCODE123${Math.floor(Math.random() * 100) + 1}`)
        }
      >
        Generate
      </Button>
    </div>
  )
}
