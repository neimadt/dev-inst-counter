import './App.css'
import { useState, useMemo } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const imgUrl = useMemo(() => {

    return `${import.meta.env.VITE_IMG_GALLERY_URL}/images/lissage-1.jpg`;
  }, []);

  return (
    <>
      <div>
        <img src={imgUrl} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
