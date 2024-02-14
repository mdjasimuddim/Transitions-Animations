import React from 'react'

const App = () => {
  return (
    <div className='h-screen p-4 Parent'>
      <div className='text-black bg-white border rounded-lg shadow-md p-4 inline-block '>
        <img className='w-64 mb-4' src="https://images.unsplash.com/photo-1706685838669-69d5dcb5ecae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='text-2xl'>Hello</h1>
        <p className='mb-4'>This is my Div</p>
        <button className='cursor-pointer transition duration-1000 hover:scale-105  hover:-translate-y-2 rounded-lg text-white px-3 py-2 bg-cyan-500 shadow-cyan-500/50 shadow-md'>Say Hello</button>
      </div>
    </div>
  )
}

export default App