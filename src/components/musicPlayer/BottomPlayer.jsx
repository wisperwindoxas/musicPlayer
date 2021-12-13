import React from 'react'
import './player.css'

export default function BottomPlayer() {


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
                <button><i className={"fas fa-play"}></i></button>
                <button><i className="fas fa-forward"></i></button>
            </div>
            <div className='title'>
                <h3>Хабиб</h3>
                <p>Ягода Малинка</p>
            </div>
        </div>
        </div>
    )
}
