import {useState, useCallback} from 'react'
import Child1 from './Child1'

const Parent1 = () => {
const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0)


const handleCount1 = useCallback(() => {
    setCount1(count1 + 1)
}, [count1]);

const handleCount2 = useCallback(() => {
    setCount2(count2 + 2)
}, [count2])

  return (
    <div>
<h1>Parent Component</h1>


<Child1 count={count1} handleCount={handleCount1}/>
<Child1 count={count2} handleCount={handleCount2}/>

    </div>
  )
}

export default Parent1