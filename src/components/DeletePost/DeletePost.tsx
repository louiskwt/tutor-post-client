import { Button } from '@mui/material';
import React, { useState } from 'react'
import AppModal from '../AppModal/AppModal';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    id: string
    index: number
}

const DeletePost: React.FC<Props> = ({
    id,
    index
}) => {
    const [deleteModal, setDeleteModal] = useState(false)
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