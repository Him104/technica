import {useState} from 'react'
import Sockets from './Sockets'

const SocketParent = () => {
const [propMessage, setPropMessage] = useState('prop message')

  return (
    <div>
<button onClick={()=>setPropMessage('updated message from parent') }>Update Message</button>

<Sockets propMessage={propMessage}/>

    </div>
  )
}

export default SocketParent