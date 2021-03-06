import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { reload } from '../../features/post/postSlice'

// Visit Input options
const visit = [
    true,
    false
]
// Vaccination Record options
const vaccines = [
    0,
    1,
    2,
    3
]

// Props type
type Props = {
    closeModal: () => void
}


const AddForm: React.FC<Props> = ({
    closeModal,
}) => {
    
    // Form info state
    const [formInfo, setFormInfo] = useState({
        title: '',
        name: '',
        subject: '',
        description: '',
        location: '',
        number: '',
        vaccines: 0,
        visit: false
    })

    // Dispatch function from slice to use reload function later
    const dispatch = useDispatch()

    // Handle Input Change
    const handleInputChange = (value: string | number, id: string) => {
        let data = {...formInfo, [id]: value}
        setFormInfo(data)
    }

    // Handle Visit Change
    const handleVisitChange = (value: string, id: string) => {
        if(value === '不上門') {
            let data = {...formInfo, [id]: false}
            setFormInfo(data)
        }

        let data = {...formInfo, [id]: true}
        setFormInfo(data)
    }

    // Handle Submit
    const handleSubmit = () => {
        // Validate the form
        let key: keyof typeof formInfo

        // Loop over the form info object to validate
        for (key in formInfo) {
            // Warn the user if a field has not been filled
            if(formInfo[key] === '') {
                toast.error('Please enter all the required (*) fields first', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                return // stop the submission and return
            }
        }

        // Submit to the backend once validated
        axios.post('http://54.242.252.42:8000/posts/add', formInfo)
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
                    // trigger a reload to update the list
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
             <Typography variant='h6' component='h1'>Add a New Post</Typography>

             {/* Add form  */}
              <TextField
                  required
                  id="title"
                  label="Title"
                  variant="standard"
                  fullWidth
                  sx={{ mt: 3 }}
                  value={formInfo.title}
                  onChange={(e) =>  handleInputChange(e.target.value, e.target.id)}
              />
              <TextField
                  required
                  id="name"
                  label="Your Name"
                  variant="standard"
                  fullWidth
                  sx={{ mt: 3 }}
                  onChange={(e) => handleInputChange(e.target.value, e.target.id)}
              />
              <TextField
                  required
                  id="subject"
                  label="Subject"
                  variant="standard"
                  sx={{ mt: 3 }}
                  fullWidth
                  onChange={(e) => handleInputChange(e.target.value, e.target.id)}
              />
              <TextField
                  required
                  id="location"
                  label="Location"
                  variant="standard"
                  fullWidth
                  sx={{ mt: 3 }}
                  onChange={(e) => handleInputChange(e.target.value, e.target.id)}
              />
          <div>
              <TextField
                  id="description"
                  label="Description"
                  multiline
                  maxRows={4}
                  fullWidth
                  sx={{ mt: 3 }}
                  onChange={(e) => handleInputChange(e.target.value, e.target.id)}
              />
          </div>
          <div>
              <Select 
                    id="visit"
                    label="Can Visit?" 
                    variant='standard' 
                    sx={{ mt: 3, }} 
                    value={formInfo.visit ? '上門' : '不上門'} 
                    fullWidth
                    onChange={(e) => handleVisitChange(e.target.value, 'visit')}
              >
                  {visit.map((option, index) => (
                      <MenuItem key={index} value={option ? '上門' : '不上門'}>{option ? '上門' : '不上門'}</MenuItem>
                  ))}
            </Select>
              <Select  
                    label="Vaccination Record" 
                    sx={{ mt: 3 }} 
                    fullWidth 
                    variant='standard' 
                    value={formInfo.vaccines}
                    id="vaccines"
                    onChange={(e) => handleInputChange(e.target.value, 'vaccines')}
                 >
                  {vaccines.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                  
              </Select>
          </div>
          <TextField
              required
              fullWidth
              id="number"
              label="Contact Number"
              variant="standard"
              sx={{ mr: 2, mt: 3 }}
              onChange={(e) => handleInputChange(e.target.value, e.target.id)}
          />
          
          {/* Form Buttons */}
          <Button color="primary" variant='contained'  sx={{ width: '100%', mt: 3 }} onClick={handleSubmit}>
              Add Post 
          </Button>
          <Button color="inherit" variant='contained' sx={{ width: '100%', mt: 2 }} onClick={closeModal}>
              Cancel
          </Button>
    </Box>
  )
}

export default AddForm