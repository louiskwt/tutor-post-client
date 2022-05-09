import { useEffect } from 'react'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { loadPost } from '../../features/post/postSlice'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import PostItem from '../PostItem/PostItem';
import { Box } from '@mui/material';


export type Post = object[]



const PostList = () => {
  const loading = useSelector((state: RootState) => state.post.loading)
  const posts = useSelector((state: RootState) => state.post.posts)
  const dispatch = useDispatch()

  useEffect(() => {
      axios.get<Post>('http://54.242.252.42:8000/posts')
            .then(res => {
              dispatch(loadPost(res.data))
              console.log(res.data)
            })
  }, [])

  return (
    (loading ? (
      <CircularProgress color='inherit' />
    ): (
      <Box mt={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem' }}>
              {posts.map((post: any) => (<PostItem id={post.id} name={post.name} title={post.title} location={post.location} visit={post.visit} vaccines={post.vaccines} description={post.description} number={post.number} />))}
      </Box>
    ))
 
  )
}

export default PostList