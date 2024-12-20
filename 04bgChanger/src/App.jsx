import {useState} from "react"

function App() {
  const [color, setColor] = useState('seagreen')
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor:color }}>
      <div className="w-1/4 m-auto fixed flex felx-wrap justify-center top-12 inset-x-0 px-2 py-3 bg-black rounded-3xl">
        <h1 className="text-center text-3xl" style={{ color:color }}>Background Changer</h1>
      </div>
      <div className="fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('red')} style={{backgroundColor: 'red' }}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('green')} style={{backgroundColor: 'green' }}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('blue')} style={{backgroundColor: 'blue' }}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={() => setColor('yellow')} style={{backgroundColor: 'yellow' }}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('teal')} style={{backgroundColor: 'teal' }}>Teal</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={() => setColor('pink')} style={{backgroundColor: 'pink' }}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('olive')} style={{backgroundColor: 'olive' }}>Olive</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={() => setColor('orange')} style={{backgroundColor: 'orange' }}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('maroon')} style={{backgroundColor: 'maroon' }}>Maroon</button>
        </div>
      </div>
    </div>
  )
}

export default App
