import React from 'react'

import './player.css'


export default function MusicPlayer({url, onClick, songName, artisName,}) {


    const [isPlay, setIsPlay] = React.useState(false)

    async function onChangeMusic (){
        setIsPlay(!isPlay)
        await onClick(url, isPlay, songName, artisName)
       
        
    
    }
    return (
     

     
                <div className={isPlay ? "wrapper active": 'wrapper'}>
                <div className='play_name'>
                    <button onClick={() => onChangeMusic()} className='player'>
                        <i className={isPlay ? "fas fa-pause": 'fas fa-play'}></i>
                        </button>
                    <div className='title_list'>
                        <h3>{artisName}</h3>
                        <p>{songName}</p>
                    </div>
                    </div>
                    <div className='time_download'>
                    <span>03:22</span> 
                    <button className='download'><i className="fas fa-download"></i></button>
                    </div>

                 
                </div>
  
    )
}
