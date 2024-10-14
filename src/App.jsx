import { useState } from 'react'
import TextToSpeech from './components/TextToSpeech';
import './App.css'

function App() {
  const [text, setText] = useState("");

  return (
    <div className='flex flex-col gap-10 items-center justify-center h-screen'>
       <h1 className='font-bold text-xl text-white'>Text to Speech Converter</h1>

       <TextToSpeech text={text}/>

       <textarea rows={8} id="editor" 
       className='block w-[70%] rounded p-2 text-lg text-gray-800 
       bg-white border-0 placeholder-gray-400 placeholder:text-lg
       outline-purple-700'
       placeholder='Please enter your text to select voices....'
       onChange={(e)=>setText(e.target.value)}
       required />
    </div>
  )
}

export default App
