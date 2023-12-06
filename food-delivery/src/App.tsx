
import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import "./App.css"
import { Provider } from "react-redux"
import { appStore } from "./redux-store/appStore"
const App = () => {
  return (
    <div className="body">
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  )
}

export default App