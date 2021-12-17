import React from 'react'
import './player.css'

export default function BottomPlayer({artis, song, isPlay, setPlayed}) {
    
    
//     const progressBar = (e) =>{
//         const width = e.target.clientWidth;
//         const clickX = e.clientX-70;
//         const duration = videoFull.current.duration;
//         videoFull.current.currentTime = (clickX / width) * duration;
//         console.log(e.clientX-70);
//         console.log(videoFull.current.currentTime = (clickX / width) * duration);
//       }
  
  
//     function updateProgress(e){
//       let duration = e.target.duration;
//       const currentTime = e.target.currentTime
//       const progressPercent = (currentTime / duration) * 100;
//       progress.current.style.width = `${progressPercent}%`
//       function loadData () {
//           let sec = parseInt(duration % 60)
//           let min = parseInt((duration / 60) % 60)
//           setGetSecond(sec)
//           setGetMinut(min)
          
//       }   
//       loadData()
  
     
//   }





   

    return (

        <div className='playerBottom'>
       
        <div className="progress">
            <div className="progressbar">
                <span>00:00</span>
                <span>02:56</span>
            </div>
        </div>
        <div className='bottom-player'>
            <div className="controler">
                <button><i className="fas fa-backward"></i></button>
                <button onClick={() =>setPlayed(!isPlay)}><i className={isPlay ? "fas fa-pause": 'fas fa-play'}></i></button>
                <button><i className="fas fa-forward"></i></button>
            </div>
            <div className='title'>
                <h3>{artis}</h3>
                <p>{song}</p>
            </div>
        </div>
       
        </div>
    )
}
