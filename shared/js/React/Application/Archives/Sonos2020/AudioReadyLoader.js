import React from 'react';

const AudioReadyLoader = ({AudioReady})=>{
    if(AudioReady) return true;
    return(  <div className="AudioLoadSplitter"><div className="lds-ripple"><div></div><div></div></div></div>)
}

export default AudioReadyLoader;