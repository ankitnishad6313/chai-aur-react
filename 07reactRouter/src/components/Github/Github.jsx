import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://api.github.com/users/ankitnishad6313')
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data);
      })

    }, [])
    
  return (
    <div>
      <h2 className='text-center text-3xl bg-gray-600 m-4 text-white p-3'>Gitub Followers: {data.followers}</h2>
    </div>
  )
}

export default Github
