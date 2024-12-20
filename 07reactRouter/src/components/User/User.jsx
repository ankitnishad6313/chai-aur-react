import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div>
      <h2 className='bg-gray-600 p-3 text-white text-3xl text-center'>User : {userid}</h2>
    </div>
  )
}

export default User
