import {useEffect, useState} from 'react'

const Useeffect = () => {

    const [data, setData] = useState([])

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => setData(json))
.then(error => console.log(error))

}, []);



  return (
<div className='p-4'>
<h1 className='text-2xl mb-4 font-bold'>All Posts</h1>
  <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
    {data.map((item) => ( 
     <li className='bg-blue-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow' key={item.id}>
   <p className='text-gray-600'><strong>User Id: </strong> {item.userId} </p>
   <p className='text-gray-900 font-semibold'><strong>Title: </strong> {item.title} </p>      
   <p className='text-gray-700'><strong>Body: </strong> {item.body} </p>     
       </li>
       ))}
  </ul>
  
  </div>
  )
}

export default Useeffect
