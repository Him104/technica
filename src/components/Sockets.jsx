import {useEffect, useState} from 'react'


const Sockets = ({propMessage}) => {

    const [message, setMessage] = useState('');
useEffect(()=> {
const socket = new WebSocket('https://echo.websocket.org/.ws')

socket.onmessage = (event) => {
    const data = event.data;
    setMessage(data);
}

return () => {
    socket.close();
};
},
    []);


    useEffect(()=> {
        if(propMessage){
            setMessage(propMessage)

        }
    }, [propMessage]);

  return (
    <div>
<h1>Websockets Message:</h1>
<p>{message}</p>

    </div>
  );
};

export default Sockets