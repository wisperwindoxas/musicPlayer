import React from 'react'
import './App.css';
import Audio from './components/Audio';
import BottomPlayer from './components/musicPlayer/BottomPlayer';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import MyContextPlayer from './context';

function App() {

  const {urlMusic}  = React.useContext(MyContextPlayer);

  console.log(urlMusic);


 function getUrlAudio(){
      console.log(urlMusic);
    }
  return (


   
    <div className="App">
          <Audio/>
          <div className='container'>
              <MusicPlayer  url='./music/Arnon_-_Te_Molla_(feat._Killua).mp3'/>
              <MusicPlayer  url='./music/avicii feat aloe blacc wake me up.mp3'/>
              <MusicPlayer url="https://cdn6.sefon.pro/prev/fJ34xVkgo8_CJyq1ZAc7kw/1639372385/239/Galibri%20%26%20Mavik%20-%20%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B8%D0%BA%D0%BE%20%D0%A4%D0%B5%D0%BB%D0%BB%D0%B8%D0%BD%D0%B8%20%28192kbps%29.mp3"/>
              <MusicPlayer/>
              <MusicPlayer/>
          </div>

          <BottomPlayer/>

    </div>

  );
}

export default App;
