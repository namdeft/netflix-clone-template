import './Banner.scss'
import axios from '../axios'
import { useEffect, useState } from 'react'

const baseURLImage = 'https://image.tmdb.org/t/p/original'

export default function Banner({ fetchURL }) {
   const [movie, setMovie] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         const requests = await axios.get(fetchURL)
         if (requests && requests.data && requests.data.results) {
            const getRandomIndex = () => {
               let randomIndex = Math.floor(Math.random() * requests.data.results.length)
               return randomIndex
            }

            setMovie(requests.data.results[getRandomIndex()])
         }
         return requests
      }
      fetchData()
   }, [])

   return (
      <>
         <header
            className='banner'
            style={{
               backgroundImage: `url(${baseURLImage}${movie?.backdrop_path})`,
               backgroundPosition: 'center center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
            }}
         >
            <div className='banner__content'>
               <h1 className='banner__title'>
                  {movie?.title || movie?.name || movie?.original_name}
               </h1>
               <div className='banner__btns'>
                  <button className='banner__btn'>Play</button>
                  <button className='banner__btn'>My List</button>
               </div>
               <p className='banner__description'>{movie.overview}</p>
            </div>
            <div className='banner__fadeBottom'></div>
         </header>
      </>
   )
}
