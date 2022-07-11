import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () =>{
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CwnLogo className='logo' />
        </Link>
        <div className='links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
        </div>
        <div className='links-container'>
          <Link className='nav-link' to='/sign-in'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation