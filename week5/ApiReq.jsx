import { useState, useEffect } from 'react'

function ApiReq() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let userList = await res.json()
        setUsers(userList)
      } catch (err) {
        console.log("err is ", err)
        setError("Failed to fetch users")
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  // deal with loading state
  if (loading) {
    return <p className='text-center mt-10'>Loading the page...</p>
  }

  // deal with error state
  if (error) {
    return <p className='text-center mt-10 text-red-500'>{error}</p>
  }

  return (
    <div className='text-center mt-10'>
      <h1 className='text-2xl font-bold mb-6'>List of Users</h1>
      <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6'>
        {users.map(user => (
          <div key={user.id} className='border p-4 rounded-lg shadow bg-white'>
            <h2 className='font-bold text-lg'>{user.name}</h2>
            <p className='text-gray-600'>{user.email}</p>
            <p className='text-gray-500'>{user.phone}</p>
            <p className='text-gray-400 text-sm'>{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApiReq