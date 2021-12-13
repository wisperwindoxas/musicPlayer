import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyContextPlayer from './context';

const Apps = () => {

  const [isPlay, setIsplay] = React.useState(false)

  return(

    <MyContextPlayer.Provider value={{isPlay, setIsplay}}>
        <App />
    </MyContextPlayer.Provider>
  )
}

ReactDOM.render(
     <Apps/> ,
  document.getElementById('root')
);


