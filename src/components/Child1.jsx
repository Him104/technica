import React from 'react'
const Child1 = ({count, handleCount}) => {
console.log(`count was inncrement by ${count}`)

  return (
    <div>
<h2>Count: {count}</h2>

<button onClick={handleCount} className='border border-grey-500 shadow-lg bg-red-600 p-2 m-5'>Increment</button>


    </div>
  )
}

export default React.memo(Child1)