import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  /* 
   useCallback memoizes this function so it’s not recreated on every render.
   It only regenerates when length, numberAllowed, or charAllowed change.
   */

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  /* 
   useEffect runs after each render and re-runs only when dependencies change.
   Here it regenerates the password whenever length or options are updated.
  */

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
    // ?. makes the reference optional and prevents errors if the ref is null.
    // passwordRef.current?.select()
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md p-6 bg-gray-850 rounded-2xl shadow-xl text-gray-100">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">
          Password Generator
        </h1>

        <div className="flex items-center mb-6 shadow-md rounded-lg overflow-hidden border border-gray-700 bg-gray-800">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-4 py-2 bg-gray-800 text-gray-100 focus:outline-none placeholder-gray-400"
            placeholder="Generated Password"
            ref={passwordRef}
          />
          <button
            className="bg-orange-500 hover:bg-orange-400 transition-colors text-white px-4 py-2 font-semibold"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="length" className="text-sm font-medium">
              Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg accent-orange-400 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-4 h-4 accent-orange-400 cursor-pointer"
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-4 h-4 accent-orange-400 cursor-pointer"
              />
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
