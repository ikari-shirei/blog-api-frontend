import './App.scss'
import 'material-icons/iconfont/material-icons.css'

// Components
import Navbar from './components/Navbar'
import Post from './components/Post'
import PostDetail from './components/PostDetail'
import Comments from './components/Comments'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostDetail />
    </div>
  )
}

export default App
