import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~`!@#$%^&*()_{}[]|\<>-+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)      
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
    alert('Copied to Clipboard!')
  }, [password])


  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
     <>
     <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-700">
      <h1 className="text-center text-white py-4 text-2xl">Password Generator</h1>
      
      <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
        <input type="text" className='outline-none w-full py-1 px-3'
         placeholder='Password' value={password}
         ref={passwordRef}
          readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800' 
          onClick={copyPasswordToClipboard}>
          Copy
          </button>
      </div>

      <div className="flex text-sm gap-x-2">
        
        <div className="flex items-center gap-x-1">
          <input type="range" id='length' 
            min={6} max={100} 
            value={length} className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
           />
          <label htmlFor="length">Length ({length})</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" id="numberInput"
            defaultChecked={numberAllowed}
            onChange={ () => { setNumberAllowed((prev) => !prev) } }
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" id="charInput"
            defaultChecked={charAllowed}
            onChange={ () => { setCharAllowed((prev) => !prev) } }
          />
          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
     </div>
     </>
  )
}

export default App
