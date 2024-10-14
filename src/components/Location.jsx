import { useLocation } from "react-router-dom"
const Location = () => {

    const location = useLocation();

  return (
    <div>
      <h1>location component </h1>
<p>Current URL : {location.pathname}</p>
<p>Search : {location.search}</p>
<p>Hash: {location.hash}</p>
{location.state }

    </div>
  )
}

export default Location
