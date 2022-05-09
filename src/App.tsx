import './App.css'
import AddPost from './components/AddPost/AddPost'
import PostList from './components/List/PostList'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <PostList />
      <AddPost/>
      <ToastContainer />
    </div>
  )
}

export default App
