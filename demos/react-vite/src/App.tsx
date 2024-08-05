
import { useState } from "react"
import DefineCustomElementsExample from "./components/DefineCustomElementsExample"
import PackageImportExample from "./components/PackageImportExample"

function App() {

  const [activeExample, setActiveExample] = useState(0)
  return (
    <>
      <header>
        <ul>
          <li>
            <button onClick={() => setActiveExample(0)}>
              Show package import example
            </button>
          </li>
          <li>
            <button onClick={() => setActiveExample(1)}>
              Show defineCustomElements example
            </button>
          </li>

        </ul>
      </header>
      <main>
        {activeExample === 0
          ? <PackageImportExample />
          : <DefineCustomElementsExample />
        }
      </main>

    </>
  )
}

export default App
