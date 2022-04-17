import { useEffect, useState } from 'react'
import axios from '../axios.js'
import YoutubeEmbed from '../YoutubeEmbed.js'
import movieTrailer from 'movie-trailer'

import './Row.scss'

const baseURLImage = 'https://image.tmdb.org/t/p/original'

export default function Row({ title, fetchURL, isLargeRow }) {
   const [movies, setMovies] = useState([])
   const [showVideo, setShowVideo] = useState()
   const [trailerURL, setTrailerURL] = useState('')

   useEffect(() => {
      const fetchData = async () => {
         const requests = await axios.get(fetchURL)
         if (requests && requests.data && requests.data.results) {
            setMovies(requests.data.results)
         }
         return requests
      }
      fetchData()
   }, [fetchURL])

   const handleShowTrailer = (movie) => {
      if (trailerURL) {
         setShowVideo(false)
      } else {
         movieTrailer(movie?.title || movie?.name || movie?.original_name || null)
            .then((url) => {
               const urlParams = new URLSearchParams(new URL(url).search)
               setTrailerURL(urlParams.get('v'))
            })
            .catch((error) => console.log(error))
         setShowVideo(true)
      }
   }

   return (
      <>
         <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__posters'>
               {movies &&
                  movies.map((movie) => {
                     return (
                        <img
                           key={movie.id}
                           className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                           src={`${baseURLImage}${
                              isLargeRow ? movie.poster_path : movie.backdrop_path
                           }`}
                           alt={movie.name}
                           onClick={() => handleShowTrailer(movie)}
                        ></img>
                     )
                  })}
            </div>
            {showVideo && <YoutubeEmbed trailerURL={trailerURL} />}
         </div>
      </>
   )
}
