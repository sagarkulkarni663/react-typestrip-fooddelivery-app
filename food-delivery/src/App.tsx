
import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import "./App.css"
const App = () => {
  return (
    <div className="body">
      <Header />
      <Outlet/>
    </div>
  )
}

export default App