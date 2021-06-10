import React from 'react';
// import { AiFillGift, AiFillAudio, AiFillSound } from 'react-icons/ai';
import './howItWorks.scss'
import {gift, microphone, volume} from '../../img/index'


export const HowItWorks = () => (
  <div className='howItWorks'>

    <h1 className='header'>How it Works</h1>

    <div className='explanation'>
      <div className='card'>
        <div className='image'>
          <img className='img' src={microphone} alt='microphone' />
        </div>
        <h2 className='header2'>Record</h2>
        <span className='description'>
          Record your audio using just your phone, or upload old content you have already recorded. All you need is a quiet room, a few minutes, and something to say!
        </span>
      </div>

      <div className='card'>
        <div className='image'>
          <img className='img' src={volume} alt='volume' />
        </div>
        <h2 className='header2'>Share</h2>
        <span className='description'>
          Your podcast episode will be syndicated amongst multiple platforms allowing listeners to enjoy your content in whichever way is most convenient to them.
        </span>
      </div>

      <div className='card'>
        <div className='image'>
          <img className='img' src={gift} alt='gift' />
        </div>
        <h2 className='header2'>Monetize</h2>
        <span className='description'>
          We offer a variety of opportunities for monetizing your content, from strategically placed ads to sponsorship opportunities.
        </span>
      </div>
    </div>
    <a href={`${process.env.REACT_APP_URL}/signup`}>
      <div className='button'>
        Start Here
      </div>
    </a>

  </div>
)