import './App.scss'
import Row from './Row/Row.js'
import requests from './requests'
import Banner from './Banner/Banner'
import Nav from './Nav/Nav'

function App() {
   return (
      <div className='App'>
         <Nav />
         <Banner fetchURL={requests.fetchTreding} />
         <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow />
         <Row title='TRENDING' fetchURL={requests.fetchTreding} />
         <Row title='TOP RATED' fetchURL={requests.fetchTopRated} />
         <Row title='ACTIONS MOVIES' fetchURL={requests.fetchActionMovies} />
         <Row title='COMEDY MOVIES' fetchURL={requests.fetchComedyMovies} />
         {/* <Row title='HORROR MOVIES' fetchURL={requests.fetchHorrorMovies} /> */}
         <Row title='ROMANCE MOVIES' fetchURL={requests.fetchRomanceMovies} />
         {/* <Row title='DOCUMENTARIES' fetchURL={requests.fetchDocumentaries} /> */}
      </div>
   )
}

export default App
