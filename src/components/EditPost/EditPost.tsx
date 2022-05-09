import { Button } from '@mui/material';
import React, {useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AppModal from '../AppModal/AppModal';

type Props = {
    id: string,
    index: number
}

const EditPost: React.FC<Props> = ({
    id,
    index
}) => {
    const [editModal, setEditModal] = useState(false)
    const closeEditModal = () => {
        setEditModal(false)
    }

  return (
    <>
        <Button color="success" endIcon={<EditIcon />} onClick={() => setEditModal(true)}>Edit Post </Button>
        <AppModal open={editModal} close={closeEditModal} type="edit" id={id} index={index}  />
    </>
  )
}

export default EditPost