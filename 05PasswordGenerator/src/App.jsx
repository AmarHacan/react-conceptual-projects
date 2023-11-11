import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength]=useState(10);
  const [includeNumbers,setIncludeNumbers]=useState(false);
  const [includeSChar,setIncludeSChar]=useState(false);
  const [password,setPassword]=useState("");

//useref store or make refference to the element we refer it to using ref={passwordRef} so 
//we can perfom action on the refered element like we used below  
  const passwordRef= useRef(null);

  //usecallback usually used for optimization where definition of the function or the code where it is used is 
  // is remembered to optimize the recall on the dependency we declared with it on which factors it should recall
  //the function like here we use length, number,character becauze these are changeable by the user and should triger the 
  // this again if these values are changed
  const CopyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  console.log(typeof(passwordRef.current?.setSelectionRange(0,5)))
  window.navigator.clipboard.writeText(password);
  },[password]);


const GeneratePassword =useCallback(
()=>{
let pass = "";
var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
(includeNumbers)?str+='1234567890':null;
(includeSChar)?str+='!@#$%^&*(){}':null;
for (let i = 1; i < length; i++) {
  let random=Math.round((Math.random()*str.length));
  pass+=str.charAt(random);
}
setPassword(pass);
},
[length,includeNumbers,includeSChar,setPassword]
);

//here useeffect is used to render a function on mount a component or run it once on startup 
//and it has also dependencies where it will call the function again if thos dependencies alter or somehow changed
useEffect(()=>{
GeneratePassword();
},[length,includeNumbers,includeSChar,GeneratePassword]);




  return (
   <div className='w-full max-w-md mx-auto shadow-lg rounded-lg bg-gray-500 px-9 my-10 text-orange-400 text-lg'>
    {/* div 1 start */}
    <div className='p-1'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow bg-white overflow-hidden rounded-lg' disabled>
      <input
      type='text'
      value={password}
      placeholder='Password'
      className='outline-none px-2 py-1 m-2 w-full rounded-lg '
      ref={passwordRef}
      readOnly
      >
      </input>
      <button
      className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
      onClick={CopyPasswordToClipBoard}
      >Copy</button>
      </div> 
    </div>
    {/* div 1 closed */}

    {/* div 2 start */}
    <div>
      <div className='flex text-sm gap-x-2 my-2 pb-1'>

        {/* div 2 child 1 */}
        <div className='flex item-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={50}
        className='cursor-pointer'
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        id='passLength'
        />
        <label htmlFor='passLength'>Length:{length}</label>
        </div>

        {/* div 2 child 2 */}
        <div className='flex item-center gap-x-1'>
        <input
        type="checkbox"
        className=''
        defaultChecked={includeNumbers}
        onChange={()=>{setIncludeNumbers((prev)=>!prev)}}
        id='numberAllowed'/>
        <label htmlFor='numberAllowed'>Numbers</label>
        </div>

        {/* div 2 child 3 */}
        <div className='flex item-center gap-x-1'>
        <input
        type="checkbox"
        className=''
        defaultChecked={includeSChar}
        onChange={()=>{setIncludeSChar((prev)=>!prev)}}
        id='charInclude'
        />
        <label htmlFor='charInclude'>Characters</label>
        </div>

      </div>
    </div>
    {/* div 2 closed */}
   </div>
  )
}

export default App
