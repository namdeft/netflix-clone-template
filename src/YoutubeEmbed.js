import React from 'react'
import PropTypes from 'prop-types'

const YoutubeEmbed = ({ trailerURL }) => (
   <div className='video-responsive'>
      <iframe
         height='390'
         width='100%'
         src={`https://www.youtube.com/embed/${trailerURL}`}
         title='YouTube video player'
         frameBorder='0'
         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
         allowFullScreen
      ></iframe>
   </div>
)

YoutubeEmbed.propTypes = {
   embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed
