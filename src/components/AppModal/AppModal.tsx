import { Box, Modal } from '@mui/material'
import React from 'react'
import AddForm from '../Forms/AddForm'
import DeleteForm from '../Forms/DeleteForm';
import EditForm from '../Forms/EditForm';

// Modal state type interface
interface ModalState {
    open: boolean
    close: () => void
    type: string
    id: string
    index: number
}

// MUI modal style
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
          {/* Modal */}
          <Modal 
            open={props.open} 
            onClose={() => props.close()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* Modal element based on types */}
                    {props.type === 'add' && <AddForm closeModal={props.close} />}
                    {props.type === 'edit' && <EditForm closeModal={props.close} id={props.id} index={props.index} />}
                    {props.type === 'delete' && <DeleteForm closeModal={props.close} id={props.id} />}
                </Box>
          </Modal>
      </div>
  )
}

export default AppModal