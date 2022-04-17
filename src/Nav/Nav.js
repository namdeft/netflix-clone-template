import { useEffect, useState } from 'react'
import './Nav.scss'

export default function Nav() {
   const [show, setShow] = useState(false)

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 400) {
            setShow(true)
         } else {
            setShow(false)
         }
      })
      return () => {
         window.removeEventListener('scroll', null)
      }
   }, [])

   return (
      <>
         <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__logo'>
               <a href='/'>
                  <img
                     className='logo__icon'
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                     alt='Netflix-logo'
                  ></img>
               </a>
            </div>
            <div className='nav__avatar'>
               <img
                  className='avatar__icon'
                  src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                  alt='Netflix-account'
               ></img>
            </div>
         </div>
      </>
   )
}
