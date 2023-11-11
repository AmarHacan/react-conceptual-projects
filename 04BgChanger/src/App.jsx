import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
   
   
   <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'
    >
      <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-3xl px-2 py-3'
    >
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-900'
      onClick={()=>setColor('red')}
      >
      Red
      </button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white'
      onClick={()=>setColor('white')}
      >
      White
      </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'
      onClick={()=>setColor('black')}
      >
      Black
      </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-900'
      onClick={()=>setColor('green')}
      >
      green
      </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-900'
      onClick={()=>setColor('blue')}
      >
      Blue
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-900'
      onClick={()=>setColor('orange')}
      >
      Orange
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-brown'
      style={{backgroundColor:'brown'}}
      onClick={()=>setColor('brown')}
      >
      Brown
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-grey-500'
      style={{backgroundColor:'grey'}}
      onClick={()=>setColor('grey')}
      >
      Grey
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-900'
      >
      Red
      </button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-900'
      >
      Red
      </button>
    </div>
    </div>
   </div>
  )
}

export default App
