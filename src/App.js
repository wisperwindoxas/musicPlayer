import React from 'react'
import './App.css';
import BottomPlayer from './components/musicPlayer/BottomPlayer';
import MusicPlayer from './components/musicPlayer/MusicPlayer';



function App() {


  const musicArr = [
    {
      artisName: "Клава Кока",
      songName: "Ла Ла Ла",
      songUrl: "https://cdn2.sefon.pro/prev/BQOyKvKuGYgkyeVERdQBww/1639450874/255/%D0%9A%D0%BB%D0%B0%D0%B2%D0%B0%20%D0%9A%D0%BE%D0%BA%D0%B0%20-%20%D0%9B%D0%B0%20%D0%9B%D0%B0%20%D0%9B%D0%B0%20%28192kbps%29.mp3",
      id: 1

    },
    {
      artisName: "DaBro",
      songName: "Услышит Весь Район",
      songUrl: "https://cdn3.sefon.pro/prev/tmHHkfM96TTL0eXqBlH_Rw/1639450874/256/DaBro%20-%20%D0%A3%D1%81%D0%BB%D1%8B%D1%88%D0%B8%D1%82%20%D0%92%D0%B5%D1%81%D1%8C%20%D0%A0%D0%B0%D0%B9%D0%BE%D0%BD%20%28192kbps%29.mp3",
      id: 2
    },
    {
      artisName: "Хабиб",
      songName: "На 4 Этаже",
      songUrl: "https://cdn7.sefon.pro/prev/00s033OWEJmDyj5jkAcBKg/1639450874/256/%D0%A5%D0%B0%D0%B1%D0%B8%D0%B1%20-%20%D0%9D%D0%B0%204%20%D0%AD%D1%82%D0%B0%D0%B6%D0%B5%20%28192kbps%29.mp3",
      id: 3
    }
  ]
  const audio = React.useRef()
  const [songsName, setSongsName] = React.useState('')
  const [artisNames, setArtisNames] = React.useState('')
  const [played, setPlayed] = React.useState('')
  const [urlSongs, setUrlSongs] = React.useState('')

  function onAlert(url, isPlay, songName, artisName,  setIsPlay) {
    setUrlSongs(url)
    setSongsName(songName)
    setArtisNames(artisName)
    setPlayed(isPlay)


    setTimeout(() =>{
      setPlayed(!isPlay)

      if(!played){
        audio.current.play()
      }else{
        audio.current.pause()
      }
    },500)
  }

 
console.log(played);

  return (



    <div className="App">
 <audio ref={audio} src={urlSongs}></audio>
      <div className='container'>
        {musicArr.map((item, index) => {
          return (
            <MusicPlayer
              key={item.id}
              onClick={onAlert}
              url={item.songUrl}
              artisName={item.artisName}
              songName={item.songName}
            />
          )
        })}
      </div>

      <BottomPlayer
        urlSongs={urlSongs}
        artis={artisNames}
        song={songsName}
        isPlay={played} 
        setPlayed={setPlayed}
        
        />
        

    </div>

  );
}

export default App;
