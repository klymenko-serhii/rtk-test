import BasicNoteField from "./features/BasicNoteField/BasicNoteField"
import CodeGenerator from "./features/CodeGenerator/CodeGenerator"
import DiscountCodeEntry from "./features/DiscountCodeEntry/DiscountCodeEntry"
import RadioSelection from "./features/RadioSelection/RadioSelection"

const App = () => {
  return (
    <main className="w-screen h-dvh flex items-center justify-center overflow-hidden bg-stale-50">
      <div className="p-4 rounded-lg shadow-2xl bg-white border border-stone-200 flex items-center justify-center w-2/3 h-2/3 flex-col gap-6">
        <CodeGenerator />
        <RadioSelection />
        <DiscountCodeEntry />
        <BasicNoteField />
      </div>
    </main>
  )
}

export default App
