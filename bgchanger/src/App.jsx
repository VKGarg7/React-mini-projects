import { useState } from 'react'

import './App.css'

function App() {
  const [color , setcolor] = useState('skyblue')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <button onClick={() => setcolor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'red'}}>
          Red
        </button>
        <button onClick={() => setcolor("Green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Green'}}>
          Green
        </button>
        <button onClick={() => setcolor("Blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Blue'}}>
          Blue
        </button>
        <button onClick={() => setcolor("Pink")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Pink'}}>
          Pink
        </button>
        <button onClick={() => setcolor("Purple")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Purple'}}>
          Purple
        </button>
        <button onClick={() => setcolor("White")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'White'} }>
          White
        </button>
        <button onClick={() => setcolor("Black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Black'}}>
          Black
        </button>
        <button onClick={() => setcolor("Brown")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Brown'}}>
          Brown
        </button>
        <button onClick={() => setcolor("Grey")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Grey'}}>
          Grey
        </button>
        <button onClick={() => setcolor("Silver")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'Silver'}}>
          Silver  
        </button>
        <button onClick={() => setcolor("Orange")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'Orange'}}>
          Orange
        </button>
       
      </div>

    </div>
  )
}

export default App
