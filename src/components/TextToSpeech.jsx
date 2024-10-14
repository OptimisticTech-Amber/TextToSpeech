import React, { useEffect, useState } from 'react'

const TextToSpeech = ({text}) => {
    const[voice ,setVoice ] = useState(null);
    const [pitch,setPitch] = useState(1);
    const [rate,setRate]= useState(1);
    const[volume,setVolume] = useState(1);
    const [isPaused,setIsPaused] = useState(false);
    const [utterance,setUtternace] = useState(null);


   useEffect(()=>{

    const synth = window.speechSynthesis;
    const Provide = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices;
    setUtternace(Provide);
    setVoice(voices[0]);

    return ()=>{
        synth.cancel();
    };
   },[text])


    const handlePlay =()=>{
        const synth = window.speechSynthesis;

        if(isPaused){
            synth.resume();
        }else{
            utterance.voice = voice;
            utterance.pitch = pitch;
            utterance.rate = rate;
            utterance.volume = volume;
            synth.speak(utterance);
        }

        setIsPaused(false);
    }

    const handlePause = ()=>{
        const synth = window.speechSynthesis;
        synth.pause();

        setIsPaused(true);
    }

    const handleStop = ()=>{
        const synth = window.speechSynthesis;
        synth.cancel();

        setIsPaused(false);
    }


    const handleVoiceChange = (e)=>{
        const voices = window.speechSynthesis.getVoices();
        setVoice(voices.find((v)=>(v.name === e.target.value))
    )};

    const handlePitchChange = (e)=>{
        setPitch(parseFloat(e.target.value));   
    }

    const handleRateChange = (e)=>{
        setRate(parseFloat(e.target.value));   
    }

    const handleVolumeChange = (e)=>{
        setVolume(parseFloat(e.target.value));   
    }

  return (
    <div className='w-[70%] text-white'>
        
        <div>
            <label htmlFor="voices" className='block mb-2 text-lg
            font-medium '
            >Select a Voice </label>


            <select  id="voices"
            className='bg-white border border-gray-300 
            text-md rounded-lg block w-full p-2.5 text-black'
            value={voice?.name}
            onChange={(e)=>handleVoiceChange(e)}>
                {window.speechSynthesis.getVoices().map((voice)=>{
                    return(
                    
                        <option className='' value={voice.name} key={voice.name}>
                        {voice.name}
                        </option>
                    )
                    
                })}
            </select>
        </div>

        <div className='flex gap-10 mt-6'>
           
            <label className='text-md font-medium'>
             Pitch:
             <input type="range" 
             min="0.5" 
             max="2" step="0.1"
             className='w-full h-2 bg-white rounded-lg appearance-none cursor-pointer'
             value={pitch}
             onChange={handlePitchChange} />
            </label>
        

      
        
            <label className='text-md font-medium'>
             Speed:
             <input type="range" 
             min="0.5" 
             max="2" step="0.1"
             className='w-full h-2 bg-white rounded-lg appearance-none cursor-pointer'
             value={rate}
             onChange={handleRateChange} />
            </label>

       
        
            <label className='text-md font-medium'>
             Volume:
             <input type="range" 
             min="0.5" 
             max="2" step="0.1"
             className='w-full h-2 bg-white rounded-lg appearance-none cursor-pointer'
             value={volume}
             onChange={handleVolumeChange} />
            </label>
            </div>

            <div className='flex gap-4 mt-6 items-center justify-center'>
                <button onClick={handlePlay}
                className='focus:outline-none text-white bg-green-600
                hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm
                px-10 py-2.5 mr-2 mb-2 '>
                {isPaused?"Resume" : "Play"}
                </button>

                <button onClick={handlePause}
                className='focus:outline-none text-white bg-yellow-300
                hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm
                px-10 py-2.5 mr-2 mb-2 ' >
                Pause
                </button>


                <button onClick={handleStop}
                className='focus:outline-none text-white bg-red-600
                hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm
                px-10 py-2.5 mr-2 mb-2 ' >
                Stop
                </button>
            </div>
    </div>
  )
}

export default TextToSpeech;