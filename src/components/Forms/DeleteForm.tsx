import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'; 
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { reload } from '../../features/post/postSlice'

type Props = {
    closeModal: () => void,
    id: string,
}

const DeleteForm: React.FC<Props> = ({
    closeModal,
    id,
}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        // Submit to the backend
        axios.delete(`http://54.242.252.42:8000/posts/${id}`)
            .then(res => {
                toast.success(res.data, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                dispatch(reload())
                closeModal()
            })
            .catch(err => toast.error(err.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }))
    }
  return (
      <Box sx={{ width: '100%' }}>
          <Typography variant='h6' component='h1'>Delete Post</Typography>
          <Box component='div' sx={{ textAlign: 'center' }}>
              <Typography variant='h6' component='p' sx={{ fontWeight: 800 }} >
                  Are you sure you want to delete?
              </Typography>
              <Button color="error" variant='contained' sx={{ width: '100%', mt: 3 }} onClick={handleDelete}>
                  Delete Post
              </Button>
              <Button color="inherit" variant='contained' sx={{ width: '100%', mt: 3 }} onClick={closeModal}>
                  Cancel
              </Button>
          </Box>
      </Box>
  )
}

export default DeleteForm