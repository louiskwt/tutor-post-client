import { useEffect } from 'react'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { loadPost, Post } from '../../features/post/postSlice'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import PostItem from '../PostItem/PostItem';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';




const PostList = () => {
  // Pull in the loading state from Redux slice
  const loading = useSelector((state: RootState) => state.post.loading)
  // Pull in the posts state from Redux slice
  const posts = useSelector((state: RootState) => state.post.posts)
  // Pull in the dispatch functon from Redux to use loadPost function
  const dispatch = useDispatch()

  useEffect(() => {
    if(loading) {
      // Use Axios to fetch the post from the backend
      axios.get<Post[]>('http://54.242.252.42:8000/posts')
        .then(res => {
          // sort the posts from latest to oldest
          let sortedData = res.data.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
          // Load the posts
          dispatch(loadPost(sortedData))
          console.log(res.data)
        })
        .catch(err => {
          // log the error
          console.log(err.message)
          // Send out error message for user
          toast.error('Sorry something went wrong! Please come back later', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        })
    }
  }, [loading]) // fetch will be triggered by loading state

  return (
    (loading ? (
      <CircularProgress color='inherit' sx={{ mt: 3}} />
    ): (
      <Box mt={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem' }}>
              {posts.map((post: any, index: number) => (
                <PostItem key={index} id={post.id} name={post.name} title={post.title} location={post.location} visit={post.visit} vaccines={post.vaccines} description={post.description} number={post.number} subject={post.subject} index={index} createdAt={post.createdAt} />
              ))}
      </Box>
    ))
 
  )
}

export default PostList