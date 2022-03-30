import './App.scss'
import 'material-icons/iconfont/material-icons.css'

// Components
import Navbar from './components/Navbar'
import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Post />
    </div>
  )
}

export default App
