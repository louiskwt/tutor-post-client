import { Box, Modal } from '@mui/material'
import React from 'react'
import AddForm from '../Forms/AddForm'

interface ModalState {
    open: boolean
    close: () => void;
    type: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}; 

const AppModal = (props: ModalState) => {
  return (
      <div>
          <Modal 
            open={props.open} 
            onClose={() => props.close()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {props.type === 'add' && <AddForm closeModal={props.close} />}
                </Box>
          </Modal>
      </div>
  )
}

export default AppModal