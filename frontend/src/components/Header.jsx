import { Link } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Header() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  return (
    <nav className='main-nav'>
      <Link to="/" className='main-nav-logo'>
        <img className='main-nav-logo-image' src={logo} alt='Argent Bank' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {user ? (
          <>
            <Link to="/profile" className='main-nav-item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
              </svg>
              {user.firstName}
            </Link>
            <button className='main-nav-item' onClick={() => dispatch(logout())}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96C43 64 0 107 0 160v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" />
              </svg>
              {''}Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className='main-nav-item'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
            </svg>
            {' '}Sign In
          </Link>
        )}

      </div>
    </nav>
  )
}

export default Header