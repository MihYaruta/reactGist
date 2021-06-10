import React from 'react'

import {spotify, google_podcasts, stitcher, podbean, apple_podcasts} from '../../img/index'
import './platformsView.scss'

export const PlatformsView = () => (
  <div className='platformsView'>
    <span className='view-header'>
      We help you get your content on all these platforms and more:
    </span>
    <div className='platformsImages'>
      <div className='viewImage'>
        <img className='img' src={apple_podcasts} alt='apple podcasts' />
        <span>Apple Podcasts</span> 
      </div>

      <div className='viewImage'>
        <img className='img' src={spotify} alt='spotify'/>
        <span>Spotify</span>
      </div>

      <div className='viewImage'>
        <img className='img' src={google_podcasts} alt='google podcasts' />
        <span>Google Podcasts</span>
      </div>

      <div className='viewImage'>
        <img className='img' src={stitcher} alt='sticher' />
        <span>Sticher</span>
      </div>

      <div className='viewImage'>
        <img className='img' src={podbean} alt='podbean' />
        <span>PodBean</span>
      </div>
    </div>
  </div>
)