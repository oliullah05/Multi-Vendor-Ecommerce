import { useState } from 'react'
import './App.css'
import MyRouter from './router/Router'
import PublicRoutes from './router/routes/publickRoutes.jsx';




function App() {
const [allRoutes,setAllRoutes]=useState([...PublicRoutes])
return <MyRouter allRoutes={allRoutes} />
  // return (
  //   <>
  //     <h1 className="text-3xl font-bold underline">
  //     Hello world!
  //   </h1>
  //   </>
  // )
}

export default App
