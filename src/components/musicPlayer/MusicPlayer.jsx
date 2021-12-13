import React from 'react'
import './player.css'


export default function MusicPlayer({url}) {
    
    const audio = React.useRef()

    const [isPlay, setIsPlay] = React.useState(false)

    function onChangeMusic (){
       
        setIsPlay(!isPlay) 
        
        if(!isPlay){
            audio.current.play()
        }else{
            audio.current.pause()
        }
    }
 
    React.useEffect(() =>{
      
    },[])
 

    return (
     

            <div className={isPlay ? "wrapper active": 'wrapper'}>
                <div className='play_name'>
                    <button onClick={() => onChangeMusic()} className='player'>
                        <i className={isPlay ? "fas fa-pause": 'fas fa-play'}></i>
                        </button>
                    <div className='title_list'>
                        <h3>Хабиб </h3>
                        <p>Ягода Малинка</p>
                    </div>
                    </div>
                    <div className='time_download'>
                    <span>03:22</span> 
                    <button className='download'><i className="fas fa-download"></i></button>
                    </div>

                    <audio ref={audio} src={url} ></audio>
                </div>
    )
}
