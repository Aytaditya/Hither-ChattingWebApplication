import React from 'react'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const {logout}=useLogout()
  return (
   
    <div className="mt-auto">
      <span className='cursor-pointer'><i className="fa-solid fa-arrow-right-from-bracket fa-2x fa-inverse" onClick={logout}></i></span>
    </div>
  )
}

export default LogoutButton
