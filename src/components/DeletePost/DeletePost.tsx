import { Button } from '@mui/material';
import React, { useState } from 'react'
import AppModal from '../AppModal/AppModal';
import DeleteIcon from '@mui/icons-material/Delete';

// Props type
type Props = {
    id: string
    index: number
}

const DeletePost: React.FC<Props> = ({
    id,
    index
}) => {
    // Handle modal state
    const [deleteModal, setDeleteModal] = useState(false)
    // Close modal function
    const closeDeleteModal = () => {
        setDeleteModal(false)
    }
    return (
        <>
            <Button color="error" endIcon={<DeleteIcon />} onClick={() => setDeleteModal(true)}>Delete Post </Button>
            <AppModal open={deleteModal} close={closeDeleteModal} type="delete" id={id} index={index} />
        </>
    )
}

export default DeletePost