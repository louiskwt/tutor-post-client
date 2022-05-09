import { Box, Fab, Modal } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import AppModal from '../AppModal/AppModal';

const AddPost = () => {
    const [addModal, setAddModal] = useState(false)
    const closeAddModal = () => {
        setAddModal(false)
    }

  return (
      <Box sx={{ position: 
      'absolute', bottom: '1rem', right: '0.2rem'}}>
          <Fab color='primary' onClick={() => setAddModal(true)}>
              <AddIcon />
          </Fab>
          <AppModal open={addModal} close={closeAddModal} type="add" />
      </Box>
  )
}

export default AddPost