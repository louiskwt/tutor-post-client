import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'; 
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { reload } from '../../features/post/postSlice'

// Props type
type Props = {
    closeModal: () => void,
    id: string,
}

const DeleteForm: React.FC<Props> = ({
    closeModal,
    id,
}) => {
    // Pull in the dispatch function from redux to use reload function later
    const dispatch = useDispatch()

    // Handle deletection 
    const handleDelete = () => {
        // Hit the backend API to perform a delete operation
        axios.delete(`http://54.242.252.42:8000/posts/${id}`)
            .then(res => {
                // Success message
                toast.success(res.data, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                // Trigger a reload to update the state
                dispatch(reload())
                // Close the modal
                closeModal()
            })
            .catch(err => {
                // error message
                toast.error(err.message, {
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
  return (
      <Box sx={{ width: '100%' }}>
          {/* Title */}
          <Typography variant='h6' component='h1'>Delete Post</Typography>

          {/* Confirmation form */}
          <Box component='div' sx={{ textAlign: 'center' }}>
              {/* Asking for confirmation */}
              <Typography variant='h6' component='p' sx={{ fontWeight: 800 }} >
                  Are you sure you want to delete?
              </Typography>

              {/* Buttons */}
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